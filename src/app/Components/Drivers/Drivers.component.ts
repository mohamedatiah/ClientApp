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
    this.drivers=a;
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
        //delete then confirm
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  ngOnInit() {
  }

}
