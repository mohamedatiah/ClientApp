import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/Models/Driver';
import { AuthService } from 'src/app/Services/Auth.service';
import { DriverService } from 'src/app/Services/Driver.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-Drivers',
  templateUrl: './Drivers.component.html',
  styleUrls: ['./Drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers?: Driver[]=[];
  constructor(private auth:AuthService,private driver:DriverService) {
    this.driver.getAll().subscribe(a=>{
      console.log(a);
      
    this.drivers=a.result;
   });
   }
   Delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       this.driver.delete(id).subscribe(a=>{
        console.log(a);
        
        if(a.statusCode==200){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.driver.getAll().subscribe(a=>{
            console.log(a);
            
          this.drivers=a.result;
         });

        }else{
          Swal.fire(
            'Error!',
            'Something went wrong.',
            'error'
          )
        }
       })

      }
    })
  }
  ngOnInit() {
  }

}
