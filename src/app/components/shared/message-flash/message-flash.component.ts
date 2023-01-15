import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-flash',
  templateUrl: './message-flash.component.html',
  styleUrls: ['./message-flash.component.css'],
})
export class MessageFlashComponent implements OnInit, OnDestroy {
  constructor(public messageService: MessageService) {}
 
  ngOnInit(): void {}

  ngOnDestroy(): void {
    
  }
}
