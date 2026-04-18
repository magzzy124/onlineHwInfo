import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Widget {
  private widgets = new BehaviorSubject<widgetType[]>([]);
  widgets$ = this.widgets.asObservable();

  addWidgets(widget: any) {
    const current = this.widgets.value;
    this.widgets.next([...current, widget]);
  }

  // removeWidgets() {
  //   this.widgets.pop();
  // }
}
