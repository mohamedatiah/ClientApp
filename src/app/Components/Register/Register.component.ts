import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
    firstName: new FormControl('', {
      validators: [Validators.required],
    }),   
    lastName: new FormControl('',{}),
    phoneNumber: new FormControl('', {
      validators: [Validators.required,Validators.minLength(8),Validators.maxLength(11),         
         Validators.pattern('^(0|[1-9][0-9]*)$')
    ],
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
      this.auth.register(this.registerForm.value).subscribe(data=>{console.log(data);
      
        if (data && data.statusCode==200) {
          this.router.navigate(['/login']);
        }else{
          Swal.fire(
            'Wrong!',
           data.errorMessages[0],
            'warning'
          )
        }

      });

    }
  }
}
