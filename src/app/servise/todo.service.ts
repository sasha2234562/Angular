import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

export interface Todo {
  addedDate: string
  id: string
  order: string
  title: string
}

export interface Res {
  data: { item: Todo }
  fieldsErrors: []
  messages: []
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    withCredentials: true,
    headers: {
      "api-key": environment.apiKey
    }
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.baseUrl, this.httpOptions)
  }

  creteTodo(title: string): Observable<Res> {
    return this.http.post<Res>(environment.baseUrl, {title}, this.httpOptions)
  }

  deleteTodo(todoId: string): Observable<Res> {
    return this.http.delete<Res>(`${environment.baseUrl}/${todoId}`, this.httpOptions)
  }
}
