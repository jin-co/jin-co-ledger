import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.join(this.email, this.password).then(res => {
      this.router.navigate(['/'])
    }).catch(err => {
      
    })
  }
}
