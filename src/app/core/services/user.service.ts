import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister, IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';
import { IResponseType } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:3000/api/user/'

  constructor(private http:HttpClient) { }
  getUser():Observable<IResponseType>{
    return this.http.get<IResponseType>(`${this.apiUrl}getusers`)
  }
  addUser(userdata:IRegister):Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}signup`,userdata)
  }
  loginUser(userdata:IUser):Observable<IResponseType>{
    return this.http.post<IResponseType>(`${this.apiUrl}login`,userdata)
  }
  updateUser(userdata:IUser,id:string){
    return this.http.put<IUser>(`${this.apiUrl}updateuser/?id=${id}`,userdata)
  }
  deleteUser(id:string):Observable<IResponseType>{
    return this.http.delete<IResponseType>(`${this.apiUrl}deleteuser?id=${id}`)
  }
  getUserById():Observable<IResponseType>{
    return this.http.get<IResponseType>(`${this.apiUrl}getuserbyid`)
  }
}
