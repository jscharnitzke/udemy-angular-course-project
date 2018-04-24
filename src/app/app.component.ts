import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  page: string;

  navigate(link: string) {
    this.page = link;
  }
}
