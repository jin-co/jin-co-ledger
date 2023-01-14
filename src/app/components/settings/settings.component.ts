import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/models/setting';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings: Setting = new Setting();
  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.settings = this.settingService.getSettings();
  }

  onSubmit() {
    this.settingService.changeSettings()
  }
}
