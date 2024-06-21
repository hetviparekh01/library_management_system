import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/category/'
  getCategory():Observable<ICategory>{
    return this.http.get<ICategory>(`${this.apiUrl}getcategories`)
  }
  addCategory(categorydata:ICategory):Observable<ICategory>{
    return this.http.post<ICategory>(`${this.apiUrl}addcategory`,categorydata)
  }
  updateCategory(categorydata:ICategory,id:string){
    return this.http.put<ICategory>(`${this.apiUrl}updatecategory/?id=${id}`,categorydata)
  }
  deleteCategory(id:string){
    return this.http.delete<ICategory>(`${this.apiUrl}/deletecategory?id=${id}`)
  }
  getAuthorsByFilteration():Observable<ICategory>{
    return this.http.get<ICategory>(`${this.apiUrl}filtercategories`)
  }
}
