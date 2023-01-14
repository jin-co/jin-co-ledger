import { Injectable } from '@angular/core';
import { Setting } from '../models/setting';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  setting: Setting = new Setting();
  constructor() {
    if (localStorage.getItem('setting') !== null) {
      this.setting = JSON.parse(localStorage.getItem('setting') as string);
    }
  }

  getSettings(): Setting {
    return this.setting;
  }

  changeSettings() {
    localStorage.setItem('setting', JSON.stringify(this.setting));
  }
}
