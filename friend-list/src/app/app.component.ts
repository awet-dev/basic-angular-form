import { Component } from '@angular/core';
import { Friend } from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'PHP'}]
  // @ts-ignore
  FriendModel = new Friend(null, null, null)
}
