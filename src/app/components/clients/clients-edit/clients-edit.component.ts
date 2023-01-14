import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css'],
})
export class ClientsEditComponent implements OnInit {
  id!: string;
  client!: Client;
  disableBalanceOnEdit: boolean =
    this.settingService.getSettings().disableBalanceOnEdit;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clientService
      .getClient(this.id)
      .subscribe((client) => (this.client = client));
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.clientService.updateClient(this.client);
    }
  }
}
