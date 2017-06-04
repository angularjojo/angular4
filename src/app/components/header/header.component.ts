import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {MessageService} from '../../services/message.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
   message: any;
   subscription: Subscription;

  constructor(private _messageService: MessageService) { 
        this.subscription = this._messageService.getMessage().subscribe(data => { 
          this.message = data;
         });   
  }

  ngOnInit() {
  }

}
