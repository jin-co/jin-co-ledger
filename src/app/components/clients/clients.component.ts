import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  totalOwed: number = 0;
  loggedUID!: string;

  constructor(
    private clientService: ClientService,
    private authService: AuthService
  ) { 
    // console.log('client com: ', authService.getCurrentUID())   
    // authService.getAuth().subscribe((auth) => {
    //   console.log('client comp: ', auth?.uid)
    //   this.loggedUID = auth?.uid as string;
    // });
  }

  ngOnInit(): void {
    this.clientService.getClients(this.loggedUID).subscribe((clients) => {
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
