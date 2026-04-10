import { Component, Input } from '@angular/core';
import { BarChart } from "../measurements/bar-chart/bar-chart";

@Component({
  selector: 'app-widget',
  imports: [BarChart],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
})
export class Widget {
  @Input() info: any;

}
