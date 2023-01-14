import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afa.signInWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.afa.signOut()
  }

  join(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afa.createUserWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
      this.router.navigate(['/']);
    });
  }

  getAuth() {
    return this.afa.authState
  }
}
