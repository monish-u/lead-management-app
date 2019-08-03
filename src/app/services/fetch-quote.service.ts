import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FetchQuoteService {
  fetchQuoteURL:string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { }

  // getTodos(): Observable<Todo[]>{
  //   return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  // }

  // toggleCompleted(todo: Todo): Observable<any> {
  //   const url = `${this.todosURL}/${todo.id}`;
  //   return this.http.put(url,  todo, httpOptions);
  // }

  // deleteTodo(todo: Todo): Observable<Todo> {
  //   const url = `${this.todosURL}/${todo.id}`;
  //   return this.http.delete<Todo>(url, httpOptions);

  // }

  fetchQuotes(quoteDetails: any) {
    //  return this.http.post<any>(this.fetchQuoteURL, quoteDetails, httpOptions)
    return [
      {
        lenderName: "vijay",
        amountAvailable: "100",
        interestRate: 6,
        lenderRating: 4.5
      },
      {
        lenderName: "dan",
        amountAvailable: "984",
        interestRate: 16,
        lenderRating: 7
      },
      {
        lenderName: "abramov",
        amountAvailable: "167",
        interestRate: 46,
        lenderRating: 3
      },
      {
        lenderName: "jen",
        amountAvailable: "14",
        interestRate: 2,
        lenderRating: 2
      }

  ]
  }
}
