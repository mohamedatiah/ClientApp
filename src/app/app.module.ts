import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './Components/Driver/Driver.component';
import { DriversComponent } from './Components/Drivers/Drivers.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { LoginComponent } from './Components/Login/Login.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { InterceptorInterceptor } from './Interceptor/interceptor.interceptor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,RegisterComponent,LoginComponent,DriverComponent,DriversComponent
  ],
  imports: [
    BrowserModule,  NgbModule,HttpClientModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule  ],
  providers: [
  {  provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
