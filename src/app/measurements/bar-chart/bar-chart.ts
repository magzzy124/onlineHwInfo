import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  imports: [],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.css',
})
export class BarChart {
  @Input() info: any;
  get parsedValue(): number {
    return parseInt(this.info().Children[0].Children[1].Children[4].Children[0].Value);
  }
}
