import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;
  private url: string = 'http://localhost:9000/'

  constructor(http: HttpClient) {
    this.http = http;
  }


  public addFriend(data: Friend):any {
    this.url = 'http://localhost:9000/addFriend';
    this.http.post(this.url, data)
  }

}
