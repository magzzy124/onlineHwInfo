import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  imports: [],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.css',
})
export class BarChart {
  @Input() widgetOptions!: widgetType;
  get parsedValue(): number {
    console.log(this.widgetOptions.data.Value)
    return parseInt(this.widgetOptions.data.Value);
  }
}
