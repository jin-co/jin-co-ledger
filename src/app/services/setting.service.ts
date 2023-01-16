import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from '../models/setting';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  setting: Setting = new Setting();
  constructor(private messageService: MessageService) {
    if (localStorage.getItem('setting') !== null) {
      this.setting = JSON.parse(localStorage.getItem('setting') as string);
    }
  }

  getSettings(): Setting {
    return this.setting;
  }

  changeSettings() {
    localStorage.setItem('setting', JSON.stringify(this.setting));
    this.messageService.showMessage('Setting has been updated', 'green')
  }
}
