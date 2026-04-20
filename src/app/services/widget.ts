import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, from, interval, merge, mergeMap } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class Widget {
  private widgets = new BehaviorSubject<widgetType[]>([]);
  widgets$ = this.widgets.asObservable();

  constructor(private httpService: HttpService) {
    interval(1000).pipe(
      mergeMap(() => {
        const widgets = this.widgets.value;

        if (widgets.length === 0) {
          return [];
        }

        return forkJoin(
          widgets.map(widget =>
            this.httpService.getSensorValue(widget.data.SensorId)
          )
        );
      })
    ).subscribe(results => {
      console.log("ALL DONE:", results);
      const current = this.widgets.value.map(console.log)
      // this.widgets.next([results]);
    });
  }
  addWidgets(widget: apiResponse) {
    const current = this.widgets.value;
    const index = current.findIndex((w) => w.data.SensorId == widget.SensorId);
    if (index == -1) {
      this.widgets.next([...current, { type: "barChart", data: widget }]);
    }
    else {
      current[index].data = widget;
      this.widgets.next([...current]);
    }
    this.widgets$.pipe(mergeMap(
      x => {
        console.log(x)
        return this.httpService.getSensorValue(x[0].data.SensorId)
      }
    )).subscribe(console.log)
  }

  // removeWidgets() {
  //   this.widgets.pop();
  // }
}
