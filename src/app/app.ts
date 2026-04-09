import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('hwInfo');
  private http = inject(HttpService)
  ngOnInit() {
    console.log("rendered")

    this.http.getInfo().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
