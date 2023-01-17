import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  totalOwed: number = 0;
  loggedUID!: string;
  settingCurrency: string = '';

  constructor(
    private clientService: ClientService,
    private settingService: SettingService
  ) {
    this.settingCurrency = settingService.getSettings().currency
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      let clientBalance = 0;
      if (client.balance !== undefined) {
        clientBalance = +client.balance;
      }
      return total + clientBalance;
    }, 0);
  }
}
