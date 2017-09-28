import {Component, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() feature = new EventEmitter<string>();

  onSelect(buttonName: string) {
    this.feature.emit(buttonName);
  }
}
