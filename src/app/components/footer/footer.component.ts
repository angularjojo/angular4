import { Component, OnInit } from '@angular/core';

import {MessageService} from '../../services/message.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  message;

  constructor(private _messageService : MessageService) { }

  ngOnInit() {
  }

  sendMessage() 
  {
    this._messageService.sendMessage(this.message);
  }

}
