import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/book/'
  getBook():Observable<IBook>{
    return this.http.get<IBook>(`${this.apiUrl}filterbooks`)
  }
  getBooksByFilteration(searchTerm:any):Observable<IBook>{
    return this.http.get<IBook>(`${this.apiUrl}filterbooks`,{
      params:searchTerm 
    })
  }
  addBook(bookdata:IBook):Observable<IBook>{
    return this.http.post<IBook>(`${this.apiUrl}addbook`,bookdata)
  }
  updateBook(bookdata:IBook,id:string){
    return this.http.put<IBook>(`${this.apiUrl}updatebook/${id}`,bookdata)
  }
  deleteBook(id:string){
    return this.http.delete<IBook>(`${this.apiUrl}/deletebook/${id}`)
  }
  getBookById(id:string){
    return this.http.get<IBook>(`${this.apiUrl}getbookbyid/${id}`)
  }
}
