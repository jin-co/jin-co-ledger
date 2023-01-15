import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/services/message.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css'],
})
export class ClientsAddComponent implements OnInit {
  client!: Client;
  disableBalanceOnAdd: boolean =
    this.settingService.getSettings().disableBalanceOnAdd;

  constructor(
    private clientService: ClientService,
    private settingService: SettingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.getAuth().subscribe((auth) => {
        form.value.owner = auth?.uid;
        form.value.balance = 0;
        this.clientService.addClient(form.value);
      });
    }
  }
}
