import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/Models/Driver';
import { AuthService } from 'src/app/Services/Auth.service';
import { DriverService } from 'src/app/Services/Driver.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Driver',
  templateUrl: './Driver.component.html',
  styleUrls: ['./Driver.component.css']
})
export class DriverComponent implements OnInit {
  id:string='';
  IsNew:boolean=true;
  Currentdriver:Driver=new Driver();
  driverForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    firstname: new FormControl('', {
      validators: [Validators.required],
    }),   
     lastname: new FormControl('',{}),
     
    phonenumber: new FormControl('', {
      validators: [Validators.required,Validators.minLength(8),Validators.maxLength(11),         
         Validators.pattern('^(0|[1-9][0-9]*)$')
    ],
    }),
    
  });
  constructor(private auth:AuthService,private router:Router,private activeRoute:ActivatedRoute,
    private driver:DriverService) {
    activeRoute.params.subscribe(params => {
      this.id=params['id'];
      if(this.id){
        console.log(this.id);
        driver.getById(this.id).subscribe(a=>{
          let d=a as Driver;
         this.Currentdriver=d;
        })
       this.IsNew=false;
      }
      
       });
  
   }

  ngOnInit() {
  }
  create(){
    console.log(this.driverForm)
    if(!this.driverForm.valid) {
      this.driverForm.markAllAsTouched();
    }else{
        if(this.Currentdriver.id){
          this.driver.update(this.driverForm.value).subscribe(a=>{
            if(a){
             this.router.navigate(['/drivers']);
   
            }else{
             Swal.fire(
               'Error!',
               'Something went wrong.',
               'error'
             )
            }
         });
        }else{
          this.driver.create(this.driverForm.value).subscribe(a=>{
            if(a){
             this.router.navigate(['/drivers']);
   
            }else{
             Swal.fire(
               'Error!',
               'Something went wrong.',
               'error'
             )
            }
         });
        }

    }
  }
  
}
