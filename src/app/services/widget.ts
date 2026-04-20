import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, from, interval, map, merge, mergeMap } from 'rxjs';
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
            this.httpService.getSensorValue(widget.data.SensorId).pipe(map(res => ({
              sensorId: widget.data.SensorId,
              ...res
            })))
          )
        );
      })
    ).subscribe(results => {
      const current = this.widgets.value.map((widget) => {
        const sensorData = results.find((sensor) => sensor.sensorId == widget.data.SensorId)
        if (sensorData == undefined) return widget;
        return {
          ...widget,
          data: {
            ...widget.data,
            Min: String(sensorData.min),
            Value: String(sensorData.value),
            Max: String(sensorData.max)
          }
        }
      })
      this.widgets.next(current);
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
