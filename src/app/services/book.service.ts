import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  bookDetail(id: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }


  addBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }

  editBook(id: number, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}
