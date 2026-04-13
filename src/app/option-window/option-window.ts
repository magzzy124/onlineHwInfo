import { Component, Input, WritableSignal } from '@angular/core';
import { Option } from "../option/option";

@Component({
  selector: 'app-option-window',
  imports: [Option],
  templateUrl: './option-window.html',
  styleUrl: './option-window.css',
})
export class OptionWindow {
  @Input() response!: WritableSignal<apiResponse>;
}
