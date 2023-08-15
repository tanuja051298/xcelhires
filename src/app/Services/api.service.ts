import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private http: HttpClient) { }

  getDepartmentData(){
    console.log("In Hi");
    return this.http.get("http://65.0.155.254:5001/admin/department/list");
  }
}
