import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  showButton: Boolean;
  hideButtonLogin: Boolean;
  ngOnInit(): void {
    this.showAndHideButton();
  }

  showAndHideButton() {
    let token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      this.showButton = true;
      this.hideButtonLogin = false;
    } else {
      this.showButton = false;
      this.hideButtonLogin = true;
    }
  }

  exit() {
    localStorage.clear();
  }
}
