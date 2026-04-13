import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HttpService } from './services/http-service';
import { interval, switchMap } from 'rxjs';
import { Widget } from "./widget/widget";
import { OptionWindow } from './option-window/option-window';

@Component({
  selector: 'app-root',
  imports: [Widget, OptionWindow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('hwInfo');
  private http = inject(HttpService)
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
    interval(1000).pipe(
      switchMap(() => this.http.getInfo())
    )
      .subscribe((data) => {
        this.value.set(data)
        console.log(parseInt(data.Children[0].Children[1].Children[4].Children[0].Value))
      })
  }
}
