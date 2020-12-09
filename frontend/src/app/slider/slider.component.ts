import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}
  @Input() name: any;
  @Input() image: any;
  @Input() description: any;
  ngOnInit(): void {}
}
