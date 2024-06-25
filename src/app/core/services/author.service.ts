import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthor } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/api/author/';
  getAuthor(): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.apiUrl}getauthors`);
  }
  addAuthor(authordata: IAuthor): Observable<IAuthor> {
    return this.http.post<IAuthor>(`${this.apiUrl}addauthor`, authordata);
  }
  updateAuthor(authordata: IAuthor, id: string) {
    return this.http.put<IAuthor>(
      `${this.apiUrl}updateauthor/?id=${id}`,
      authordata
    );
  }
  deleteAuthor(id: string) {
    return this.http.delete<IAuthor>(`${this.apiUrl}/deleteauthor?id=${id}`);
  }
  getAuthorsByFilteration(): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.apiUrl}filterauthors`);
  }
  getAuthorByName(name: string) {
    return this.http.get<IAuthor>(`${this.apiUrl}getauthorbyname`, {
      params: { name },
    });
  }
}
