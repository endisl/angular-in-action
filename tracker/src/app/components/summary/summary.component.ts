import { Component, OnInit } from '@angular/core';
import { UserInterface, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  followers: UserInterface[] = [];
  following: UserInterface[] = [];  
   
  constructor(private service: UsersService) {}
 
  get baniama(): string[] {  
    let followersLog: string[] = [];
    let followingLog: string[] = [];

    for (let i = 0; i < this.followers.length; i++) {      
      followersLog[i] = this.followers[i].login;
    }

    for (let i = 0; i < this.following.length; i++) {
      followingLog[i] = this.following[i].login;
    }

    return followingLog.filter(x => !followersLog.includes(x)); 
  }

  ngOnInit(): void {
    this.service.loadFollowers().subscribe(followers => this.followers = followers);
    this.service.loadFollowing().subscribe(following => this.following = following);
  }
}
