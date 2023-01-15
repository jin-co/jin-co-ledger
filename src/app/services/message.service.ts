import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  isOpen: boolean = false;
  message: string = '';
  bgColor: string = '';
  constructor() {}

  showMessage(message: string, color: string) {
    this.message = message;
    this.isOpen = true;
    this.bgColor = color;
    setTimeout(() => {
      this.isOpen = false;
      this.bgColor = '';
    }, 3000);
  }

  getIsOpen() {
    return this.isOpen;
  }

  getMessage() {
    return this.message;
  }

  getBgColor() {
    return this.bgColor;
  }
}
