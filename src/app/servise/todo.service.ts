import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
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
     this.http.delete(`${environment.baseUrl}/${todoId}`, this.httpOptions).pipe(map(res=> {
       return this.todos$.getValue().filter(i => i.id !== todoId)
     })).subscribe(t => {
       this.todos$.next(t)
    })
  }

  createTodo(title: string) {
     this.http.post<Res>(`${environment.baseUrl}`, {title}, this.httpOptions).subscribe(res => {
      this.todos$.next([res.data.item, ...this.todos$.getValue()])
    })
  }
}
