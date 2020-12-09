import { Component } from '@angular/core';
import { Friend } from "./friend";
import { FormsModule} from "@angular/forms";
import { AddFriendService} from "./add-friend.service";
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    const myObserver = {
      next: (x:string) => console.log("observable value is " + x),
      error: (error: string) => console.log("observable got error " + error),
    }
    observable.subscribe(myObserver);
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
