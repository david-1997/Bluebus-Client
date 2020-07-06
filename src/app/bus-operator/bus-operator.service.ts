import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusOperatorService {

  constructor(private http:HttpClient) { }

  getOperatorName(email):Observable<any>{
    return this.http.get('https://david-bluebus.herokuapp.com/operator/getbusname/'+email);
  }
  operatorSignup(data):Observable<any>{
    return this.http.post('https://david-bluebus.herokuapp.com/operator/signup',data);
  }
  operatorLogin(data):Observable<any>{
    return this.http.post('https://david-bluebus.herokuapp.com/operator/login',data);
  }
  addBus(data):Observable<any>{
    return this.http.post('https://david-bluebus.herokuapp.com/operator/addbus',data);
  }
  deleteBus(regNo):Observable<any>{
    return this.http.delete('https://david-bluebus.herokuapp.com/operator/deletebus/' +regNo);
  }
  viewBuses(name):Observable<any>{
    return this.http.get('https://david-bluebus.herokuapp.com/operator/viewbuses/' + name);
  }
  cancelBusTicket(data,regNo):Observable<any>{
    return this.http.put('https://david-bluebus.herokuapp.com/bus/cancelseats/' + regNo,data);
  }
}
