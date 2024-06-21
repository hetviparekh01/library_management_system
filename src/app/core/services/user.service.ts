import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister, IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:3000/api/user/'

  constructor(private http:HttpClient) { }
  getUser():Observable<IUser>{
    return this.http.get<IUser>(`${this.apiUrl}getusers`)
  }
  addUser(userdata:IRegister):Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}signup`,userdata)
  }
  loginUser(userdata:IUser){
    return this.http.post<IUser>(`${this.apiUrl}login`,userdata)
  }
  updateUser(userdata:IUser,id:string){
    return this.http.put<IUser>(`${this.apiUrl}updateuser/?id=${id}`,userdata)
  }
  deleteUser(id:string){
    return this.http.delete<IUser>(`${this.apiUrl}deleteuser?id=${id}`)
  }
}
