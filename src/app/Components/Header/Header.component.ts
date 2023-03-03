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
    auth.setIsloggedIn();
    auth.isAuthenticated().subscribe(a=>{
    this.IsLoggedIn=a;
    console.log(this.IsLoggedIn);
    
    })
   }

   logout(){
    console.log(this.IsLoggedIn);
    
    this.auth.logOut();
    this.router.navigate(['/login']);

   }
   login(){    console.log(this.IsLoggedIn);

    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
