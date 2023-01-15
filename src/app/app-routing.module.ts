import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './components/auth/join/join.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { ClientsAddComponent } from './components/clients/clients-add/clients-add.component';
import { ClientsEditComponent } from './components/clients/clients-edit/clients-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'join', component: JoinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'client/add', component: ClientsAddComponent},
  {path: 'client/edit/:id', component: ClientsEditComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'setting', component: SettingsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
