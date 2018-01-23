import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
 
  @Input('max') max;
  @Input('value') value;
  @Input('text') text;
  
  constructor() {
 
  }
 
}