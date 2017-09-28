import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentShown: string = 'recipes';

  onNavigate(feature: string) {
    this.contentShown = feature;
  }
}
