import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let followersApi: string = 'https://api.github.com/users/endisl/followers';
let followingApi: string = 'https://api.github.com/users/endisl/following'

export interface UserInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    

  constructor(private http: HttpClient) { }

  loadFollowers() {
    return this.http.get<UserInterface[]>(followersApi);          
  }

  loadFollowing() {
    return this.http.get<UserInterface[]>(followingApi);          
  }


  //arr1 - arr2
  //difference = this.arr1.filter(x => !this.arr2.includes(x)); 
}
