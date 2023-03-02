import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';
import { DriverService } from 'src/app/Services/Driver.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  IsLoggedIn:boolean=false;
  constructor(private auth:AuthService,private router:Router) {
    auth.isAuthenticated().subscribe(a=>{
    this.IsLoggedIn=a;
    })
   }

   logout(){
    this.auth.logOut();
    this.router.navigate(['/login']);

   }
   login(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
