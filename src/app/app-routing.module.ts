import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './COMPONENTS/register/register.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import { BoardUserComponent } from './COMPONENTS/board-user/board-user.component';
import { BoardModeratorComponent } from './COMPONENTS/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './COMPONENTS/board-admin/board-admin.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'inicio', component:InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }