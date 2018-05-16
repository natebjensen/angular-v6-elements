import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.css']
})
export class CustomElementComponent implements OnInit {

  @Input() name = 'Angular 6';

  constructor() { }

  ngOnInit() {
  }

}
