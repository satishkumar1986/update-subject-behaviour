import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appoimentObj = [
    { visitId: '1', status: 'confirm' },
    { visitId: '2', status: 'confirm' },
    { visitId: '3', status: 'confirm' },
    { visitId: '4', status: 'confirm' },
    { visitId: '5', status: 'confirm' }
  ];

  private BASE_API_URL = "http://localhost:8080/appoinment/";

  defaultAppoinment = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getAllPatient(): Observable<any> {
    return this.http.get(this.BASE_API_URL + "GetAll")
    .pipe(
      map(item =>{
        console.log(item['data']);
        this.defaultAppoinment.next(item['data']);
      })
    )
    
  }

  updateStatus(model) {
    return this.http.post(this.BASE_API_URL + "update", model);
  }

}
