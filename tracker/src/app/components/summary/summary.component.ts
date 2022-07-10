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
  followersLog: string[] = [];
  followingLog: string[] = [];
   
  constructor(private service: UsersService) {}
 
  get baniama(): string[] {   
    for (let i = 0; i < this.followers.length; i++) {      
      this.followersLog[i] = this.followers[i].login;
    }
    for (let i = 0; i < this.following.length; i++) {
      this.followingLog[i] = this.following[i].login;
    }
    return this.followingLog.filter(x => !this.followersLog.includes(x)); 
  }

  ngOnInit(): void {
    this.service.loadFollowers().subscribe(followers => this.followers = followers);
    this.service.loadFollowing().subscribe(following => this.following = following);
  }
}
