import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
   return  this.http.get<Todo[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", {
      withCredentials: true,
      headers: {
        "api-key": "02801dc9-c643-40b7-9ded-224fb486763d"
      }
    })
  }
  creteTodo(title: string): Observable<Res> {
   return  this.http.post<Res>("https://social-network.samuraijs.com/api/1.1/todo-lists", {title}, {
      withCredentials: true,
      headers: {
        "api-key": "02801dc9-c643-40b7-9ded-224fb486763d"
      }
    })
  }
  deleteTodo(todoId: string): Observable<Res> {
    return this.http.delete<Res>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, {
      withCredentials: true,
      headers: {
        "api-key": "02801dc9-c643-40b7-9ded-224fb486763d"
      }
    })
  }
}
