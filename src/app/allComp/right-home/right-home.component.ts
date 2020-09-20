import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-right-home',
  templateUrl: './right-home.component.html',
  styleUrls: ['./right-home.component.scss']
})
export class RightHomeComponent implements OnInit {

  appoinment;

  subvar;

  constructor(private _appointmentService:AppointmentService) { }

  ngOnInit(): void {
    //this.getAllPatient();

    this._appointmentService.defaultAppoinment.subscribe(res=>{
      console.log(res);
      this.appoinment = res;
    })

  }

  getAllPatient(){
    this._appointmentService.getAllPatient().subscribe(res=>{
      console.log(res);
      //this.appoinment = res.data;
    })
  }

  getStatus(visitId, status){
    let post = {visitId:visitId, status:status}
    this._appointmentService.updateStatus(post).subscribe(res=>{
      this.getAllPatient();
    })    
  }

}
