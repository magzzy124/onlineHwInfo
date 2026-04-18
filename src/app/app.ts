import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HttpService } from './services/http-service';
import { interval, Observable, switchMap } from 'rxjs';
import { Widget } from "./widget/widget";
import { Widget as WidgetService } from './services/widget';
import { OptionWindow } from './option-window/option-window';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Widget, OptionWindow, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private widget: WidgetService) {
    this.widgets$ = this.widget.widgets$;
  }
  protected readonly title = signal('hwInfo');
  private http = inject(HttpService)
  widgets$: Observable<any[]>;
  value: WritableSignal<apiResponse> = signal<apiResponse>({
    id: 0,
    Text: "",
    Min: "",
    Value: "",
    Max: "",
    ImageURL: "",
    Children: [],
  });
  ngOnInit() {

    this.widgets$ = this.widget.widgets$;

    interval(1000).pipe(
      switchMap(() => this.http.getInfo())
    )
      .subscribe((data) => {
        this.value.set(data)
      })
  }
}
