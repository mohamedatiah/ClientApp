import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  submit() {
    if(!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
    }else{
      const { username, password } = this.loginForm.value;
      this.auth.login(this.loginForm.value).subscribe(a=>{
        if(a.status==200){
          this.router.navigate(['/drivers']);
        }
      });

    }

  }
}
