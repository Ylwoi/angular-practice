/**
 * Created by cw on 2017-09-10.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online {color: white} .offline {color: black}`]
})

export class ServerComponent {
  status;

  constructor() {
    this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getStatus() {
    return this.status
  }

  getColor() {
    return this.status === 'Online' ? 'Green' : 'Red';
  }
}
