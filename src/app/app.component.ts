import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(){
     //called first time before the ngOnInit()
     console.log("from constructor");
  }

  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
     console.log("from ngOnInit");
  }
}
