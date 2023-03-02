import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '../environments/environments';
import { Login } from '../Models/Login';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private isLoggedIn: BehaviorSubject<boolean>;
    private apiUrl=environment.apiUrl;
constructor(private http:HttpClient) {
  if(this.getToken()){
    this.isLoggedIn=new BehaviorSubject<boolean>(false);

  }else{
    this.isLoggedIn=new BehaviorSubject<boolean>(false);

  }

 
 }
register(register:any){
  let request = `${this.apiUrl}/users/register`;
  return this.http
    .get(request)
    .pipe(
      map((data:any) => {
        if (data && data.status==200&&data.data) {
          return true;
        }else{
          return false;
        }
      })
    );
}
login(login:any){

  let request = `${this.apiUrl}/api/Auth/login`;
  return this.http
    .get(request)
    .pipe(
      map((data:any) => {
        if (data && data.status==200&&data.data) {
         this.setToken(data.data);
         this.isLoggedIn.next(true);

        }
        return data;
      })
    );}
isAuthenticated(){

  return this.isLoggedIn;
}
getToken(){
  return localStorage.getItem("token");
}
setToken(token:any){
  localStorage.setItem("token",token);
}
logOut(){
  localStorage.removeItem("token");
  this.isLoggedIn.next(false);

}
}
