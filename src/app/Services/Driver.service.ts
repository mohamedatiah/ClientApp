import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environments';
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
  let request = `${this.apiUrl}Drivers`;
    return this.http
      .get(request)
      .pipe(
        map((data:any) => {
          
            return data;
          
        })
      );
}
getById(id:any){
  let request = `${this.apiUrl}Drivers/${id}`;
    return this.http
      .get(request)
      .pipe(
        map((data:any) => {
         
            return data;
          
        })
      );}
create(driver:any){
  let request = `${this.apiUrl}Drivers`;
    return this.http
      .post(request,driver)
      .pipe(
        map((data:any) => {
          return data;
        })
      ); 
}
update(driver:any,id:any){
  let request = `${this.apiUrl}Drivers/${id}`;
  driver.id=id;
  return this.http
    .put(request,driver)
    .pipe(
      map((data:any) => {
        return data;
      })
    ); 
}
delete(id:any){
  let request = `${this.apiUrl}Drivers/${id}`;
  return this.http
    .delete(request)
    .pipe(
      map((data:any) => {
        return data;
      })
    ); 
}
}
