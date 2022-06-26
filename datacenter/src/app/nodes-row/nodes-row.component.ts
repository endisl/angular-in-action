import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  @Input() node: any;
  
  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
}
