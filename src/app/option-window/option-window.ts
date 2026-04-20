import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { Option } from "../option/option";
import { HttpService } from '../services/http-service';

@Component({
  selector: 'app-option-window',
  imports: [Option],
  templateUrl: './option-window.html',
  styleUrl: './option-window.css',
})
export class OptionWindow implements OnInit {
  response: WritableSignal<apiResponse | undefined> = signal(undefined);
  constructor(private httpService: HttpService) { }
  ngOnInit(): void {
    this.httpService.getInfo().subscribe({
      next: this.response.set,
      error: console.error,
    })
  }
}
