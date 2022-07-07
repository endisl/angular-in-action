import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let followers: string = 'https://api.github.com/users/endisl/followers';
let following: string = 'https://api.github.com/users/endisl/following'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
}
