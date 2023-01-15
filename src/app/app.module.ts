import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PERSISTENCE } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientsAddComponent } from './components/clients/clients-add/clients-add.component';
import { ClientsEditComponent } from './components/clients/clients-edit/clients-edit.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { JoinComponent } from './components/auth/join/join.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/shared/modal/modal.component';
import { AuthModalComponent } from './components/auth/auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    ClientsAddComponent,
    ClientsEditComponent,
    ClientDetailsComponent,
    LoginComponent,
    JoinComponent,
    SettingsComponent,
    NotFoundComponent,
    ModalComponent,
    AuthModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: PERSISTENCE, useValue: 'session' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
