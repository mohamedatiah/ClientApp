import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard/auth.guard';
import { DriverComponent } from './Components/Driver/Driver.component';
import { DriversComponent } from './Components/Drivers/Drivers.component';
import { LoginComponent } from './Components/Login/Login.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { AuthService } from './Services/Auth.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'register',component:RegisterComponent
  },
  {
    path: 'driver',component:DriverComponent,canActivate:[AuthGuard]
  },
  {
    path: 'driver/:id',component:DriverComponent,canActivate:[AuthGuard]
  },
  {
    path: 'drivers',component:DriversComponent,canActivate:[AuthGuard]
  },
  {
    path: '**',component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
