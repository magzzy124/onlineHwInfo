import { Component, Input, WritableSignal } from '@angular/core';

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
}
