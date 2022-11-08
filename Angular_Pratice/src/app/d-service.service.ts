import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DServiceService {
  userArr=[];
  apiUrl="http://localhost:8081/User";
  constructor(private http:HttpClient) { }

  readData():Observable<any>{
    return this.http.get(this.apiUrl+'/All');
  }

  createUser(data:any):Observable<any>{
    return this.http.post(this.apiUrl+'/create',data);
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+'/delete/'+id);
  }
  updateData(data:any,id:any):Observable<any>{
    return this.http.put(this.apiUrl+'/update/'+id,data);
  }

  getSingleuser(id:any):Observable<any>
  {
    return this.http.get(this.apiUrl+'/get/'+id);
  }
  getAllUser():Observable<any>{
    return this.http.get( 'https://jsonplaceholder.typicode.com/users');
  }
  getAllAtendance(obj:any):Observable<any>{
    return this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllAttendance',obj);
  }
}
