import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.join(this.email, this.password).then(res => {
      
    }).catch(err => {
      
    })
  }
}
