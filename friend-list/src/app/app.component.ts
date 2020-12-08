import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "friend-list"
  languages = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'PHP'}]
  // @ts-ignore
  friendModel = new Friend(null, null, null)

  private addFriendService: AddFriendService

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public Submit(): void {
    const observable = this.addFriendService.addFriend(this.friendModel)

    const myObserver = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
    };
    observable.subscribe(myObserver);
  }


}
