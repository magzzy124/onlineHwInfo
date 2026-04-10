import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpService } from './services/http-service';
import { interval, switchMap } from 'rxjs';
import { Widget } from "./widget/widget";

@Component({
  selector: 'app-root',
  imports: [Widget],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('hwInfo');
  private http = inject(HttpService)
  value = signal({});
  ngOnInit() {
    interval(1000).pipe(
      switchMap(() => this.http.getInfo())
    )
      .subscribe((data) => {
        this.value.set(data)
        console.log(data)
      })
  }
}
