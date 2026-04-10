import { Component } from '@angular/core';

@Component({
  selector: 'app-measure',
  imports: [],
  templateUrl: './measure.html',
  styleUrl: './measure.css',
})
export class Measure {
  height = '0%';
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const val = Number(input.value);
    if (!isNaN(val) && val >= 0) {
      this.height = val + '%';
    } else {
      this.height = '0%';
    }
    console.log(input.value);
  }
}
