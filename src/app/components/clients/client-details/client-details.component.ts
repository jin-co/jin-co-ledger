import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  id!: string;
  client!: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      if(typeof client.balance !== 'undefined') {
        if(client.balance > 0) {
          this.hasBalance = true
        }
      }
      this.client = client;
    });
  }

  onDelete() {
    this.clientService.deleteClient(this.client)
  }

  updateBalance() {
    this.clientService.updateClient(this.client)
  }
}
