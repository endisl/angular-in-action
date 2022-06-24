import { Component, Input } from '@angular/core';

@Component({
  selector: 'metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})

export class MetricComponent {
  @Input() title: string = '';
  @Input() description: string ='';
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
