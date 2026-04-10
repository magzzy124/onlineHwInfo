import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http-service';
import { interval, switchMap } from 'rxjs';
import { Measure } from './measure/measure';

@Component({
  selector: 'app-root',
  imports: [Measure],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('hwInfo');
  private http = inject(HttpService)
  ngOnInit() {
    // interval(1000).pipe(
    //   switchMap(() => this.http.getInfo())
    // )
    //   .subscribe(console.log)
  }
}
