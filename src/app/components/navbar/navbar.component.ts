import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedInUser!: string;
  isMenuClosed:boolean = true
  showRegister: boolean = this.settingService.
  getSettings().allowRegistration;

  constructor(
    private autService: AuthService,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.autService.getAuth().subscribe((auth) => {
      this.loggedInUser = auth?.email as string;
    });
  }

  onLogout() {
    this.autService.logout();
  }
}
