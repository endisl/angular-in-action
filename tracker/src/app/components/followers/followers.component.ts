import { Component, OnInit } from '@angular/core';
import { UserInterface, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: UserInterface[];


  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.service.loadFollowers().subscribe(followers => this.followers = followers);
  }
 
  
 
 
  /*  arr1: any[] = [];
  arr2: any[] = [];

  constructor() { }

  //arr1 - arr2
  difference = this.arr1.filter(x => !this.arr2.includes(x));  */                      

}
