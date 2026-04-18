import { Component, Input, WritableSignal } from '@angular/core';
import { Widget } from '../services/widget';

@Component({
  selector: 'app-option',
  imports: [],
  standalone: true,
  templateUrl: './option.html',
  styleUrl: './option.css',
})
export class Option {
  @Input() children!: apiResponse;
  @Input() offset = 0;
  constructor(private widget: Widget) { }
  addWidget(item: apiResponse) {
    if (item.Max != "" && item.Min != "" && item.Value != "")
      this.widget.addWidgets({ type: "barChart", data: item })
  }
}
