import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
 items;
  constructor() { }

  ngOnInit() {
    this.items = [{name:"jo", age: 27}, {name:"nair", age: 28}, {name:"avm", age: 28}];
  }

}
