import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { map, Observable } from 'rxjs';
import { Client } from '../models/client';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientsCollection!: AngularFirestoreCollection<Client>;
  clientDoc!: AngularFirestoreDocument<Client>;
  clients!: Observable<Client[]>;
  client!: Observable<Client>;
  owner!: string;
  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.clientsCollection = this.afs.collection('clients', (ref) =>
      ref.orderBy('lastName', 'asc')
    );
  }

  getClients(): Observable<Client[]> {    
    this.clientsCollection = this.afs.collection('clients', (ref) =>
      ref.where('owner', '==', this.authService.getCurrentUID() === undefined ? '' : this.authService.getCurrentUID())
    );
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.clients;
  }

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map((action) => {
        if (!action.payload.exists) {
          return {};
        } else {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.client;
  }

  addClient(client: Client) {
    try {
      this.clientsCollection.add(client);
      this.messageService.showMessage('New Client Added', 'green');
    } catch (error) {
      this.messageService.showMessage('Adding Failed', 'red');
    }
    this.router.navigate(['/']);
  }

  updateClient(client: Client) {
    try {
      this.clientDoc = this.afs.doc(`clients/${client.id}`);
      this.clientDoc.update(client);
      this.messageService.showMessage('Client Updated', 'green');
    } catch (error) {
      this.messageService.showMessage('Updating Failed', 'red');
    }
    this.router.navigate(['/']);
  }

  deleteClient(client: Client) {
    try {
      this.clientDoc = this.afs.doc(`clients/${client.id}`);
      this.clientDoc.delete();
      this.messageService.showMessage('Client Deleted', 'green');
    } catch (error) {
      this.messageService.showMessage('Deleting Failed', 'red');
    }
    this.router.navigate(['/']);
  }
}
