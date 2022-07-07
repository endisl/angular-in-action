import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {
  arr1: any[] = [];
  arr2: any[] = [];

  constructor() { }

  //arr1 - arr2
  difference = this.arr1.filter(x => !this.arr2.includes(x));                       

}
