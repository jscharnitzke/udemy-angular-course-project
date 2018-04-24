import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  navigateTo(link: string) {
    this.navClick.emit(link);
  }

}
