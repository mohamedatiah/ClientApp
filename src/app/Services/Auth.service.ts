import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Login } from '../Models/Login';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private isLoggedIn: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
    private apiUrl=environment.apiUrl;
constructor(private http:HttpClient) {
  this.setIsloggedIn();

 
 }
register(register:any){
  console.log(register)
  let request = `${this.apiUrl}Auth/register`;
  return this.http
    .post(request,register)
    .pipe(
      map((data:any) => {
    return data;
      })
    );
}
login(login:any){

  let request = `${this.apiUrl}Auth/login`;
  return this.http
    .post(request,login)
    .pipe(
      map((data:any) => {
        if (data && data.statusCode==200&&data.result) {
          
         this.setToken(data.result);
         this.isLoggedIn.next(true);

        }
        return data;
      })
    );}
    setIsloggedIn(){
      if(this.getToken()){
        this.isLoggedIn.next(true);
    
      }else{
        this.isLoggedIn.next(false);
    
      }
    }
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
