import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
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

  todos$ = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      "api-key": environment.apiKey
    }
  }

  getTodos() {
    return this.http.get<Todo[]>(environment.baseUrl, this.httpOptions).subscribe((t) => {
      this.todos$.next(t)
    })
  }

  deleteTodo(todoId: string) {
    return this.http.delete(`${environment.baseUrl}/${todoId}`, this.httpOptions).subscribe(() => {
      this.todos$.next(this.todos$.getValue().filter(i => i.id !== todoId))
    })
  }

  createTodo(title: string) {
    return this.http.post<Res>(`${environment.baseUrl}`, {title}, this.httpOptions).subscribe(res => {
      this.todos$.next([res.data.item, ...this.todos$.getValue()])
    })
  }

  // getTodos() {
  //   return this.http.get<Todo[]>(environment.baseUrl, this.httpOptions).subscribe((t) => {
  //     this.todos$.next(t)
  //   })
  // }
  //
  // creteTodo(title: string) {
  //   this.http.post<Res>(environment.baseUrl, {title}, this.httpOptions).subscribe((res: Res) => {
  //     this.todos$.next([res.data.item, ...this.todos$.getValue()])
  //   })
  // }
  //
  // deleteTodo(todoId: string) {
  //   this.http.delete<Res>(`${environment.baseUrl}/${todoId}`, this.httpOptions).subscribe(() => {
  //     this.todos$.next(this.todos$.getValue().filter(f => f.id !== todoId))
  //   })
  // }
}
