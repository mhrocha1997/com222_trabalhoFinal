import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor() {}
  @Input() name: any;
  @Input() image: any;
  @Input() avaliable: any;
  @Input() rate: any;
  ngOnInit(): void {}
}
