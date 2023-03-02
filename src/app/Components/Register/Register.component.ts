import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
    firstname: new FormControl('', {
      validators: [Validators.required],
    }),   
    lastname: new FormControl('',{}),
    phonenumber: new FormControl('', {
      validators: [Validators.required,Validators.minLength(8),Validators.maxLength(11)],
    }),
  });
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  register(){
    console.log(this.registerForm)
    if(!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
    }else{
      this.auth.register(this.registerForm.value);
    this.router.navigate(['/login']);

    }
  }
}
