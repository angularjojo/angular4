import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  sideNavItems;
  constructor() { }

  ngOnInit() {
    this.sideNavItems= [{routeName:"Page 1", route:"/page1"}, {routeName:"Page 2", route:"/page2"}]
  }

}
