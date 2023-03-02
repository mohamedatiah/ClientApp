import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../environments/environments';
import { Driver } from '../Models/Driver';

@Injectable(
    {
        providedIn: 'root',

    }
)
export class DriverService {
     products : Array<Driver> = [];
      apiUrl=environment.apiUrl;
     constructor(private http:HttpClient) { }
    
getAll(){
    let request = `${this.apiUrl}/driver/getall`;
    return this.http
      .get(request)
      .pipe(
        map((data:any) => {
          if (data && data.status==200&&data.data) {
            return data;
          }
        })
      );
}
getById(id:any){
    let request = `${this.apiUrl}/driver/getById?id=`+id;
    return this.http
      .get(request)
      .pipe(
        map((data:any) => {
          if (data && data.status==200&&data.data) {
            return data;
          }
        })
      );}
create(driver:any){
    let request = `${this.apiUrl}/driver/create`;
    return this.http
      .post(request,driver)
      .pipe(
        map((data:any) => {
          if (data && data.status==200) {
            return true;
          }else{
            return false;
          }
        })
      ); 
}
update(driver:any){
  let request = `${this.apiUrl}/driver/update`;
  return this.http
    .post(request,driver)
    .pipe(
      map((data:any) => {
        if (data && data.status==200) {
          return true;
        }else{
          return false;
        }
      })
    ); 
}
}
