import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService} from "./add-friend.service";
import {OnInit} from '@angular/core';
import {subscribeTo} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "friend-list"
  languages = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'PHP'}]
  // @ts-ignore
  friendModel = new Friend(null, null, null, null, null, null)

  private addFriendService: AddFriendService
  public allFriends: any;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public Submit(): void {
    const observable = this.addFriendService.addFriend(this.friendModel);
    const myObservable = {
      observable: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => this.display('http://localhost:9000/allFriends')
    }
    observable.subscribe(myObservable);
    console.log(this.allFriends);
  }

  public async display(url: string): Promise<any> {

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const body = await response.json();
    this.allFriends = body;
    return body;
  }

  ngOnInit(): void {
    this.display('http://localhost:9000/allFriends');
  }
}
