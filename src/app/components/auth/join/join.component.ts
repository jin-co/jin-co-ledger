import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(
    private authService: AuthService,
    private ownerService: OwnerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .join(this.email, this.password)
      .then((res) => {
        this.authService.getAuth().subscribe((auth) => {
          this.ownerService.addOwner(
            auth?.uid as string,
            auth?.email as string
          );
        });
      })
      .catch((err) => {
        this.messageService.showMessage(err.toString().split('Firebase:')[1], 'red');
      });
  }
}
