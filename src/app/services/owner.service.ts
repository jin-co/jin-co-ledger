import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Owner } from '../models/owner';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  ownersCollection: AngularFirestoreCollection<Owner>;
  ownerDoc!: AngularFirestoreDocument<Owner>;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.ownersCollection = this.afs.collection('users');
  }

  addOwner() {
    this.authService.currentUser.subscribe((user) => {
      const newOwner: Owner = user;
      this.ownersCollection.add(newOwner);
    });
  }
}
