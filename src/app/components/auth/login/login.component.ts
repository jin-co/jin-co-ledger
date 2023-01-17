import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        this.authService.setUID(res as string);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log('login error: ', err)
        this.messageService.showMessage(err.toString().split('Firebase:')[1], 'red');
      });
  }
}
