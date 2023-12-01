import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, map} from "rxjs";
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
  error = []
  httpOptions = {
    withCredentials: true,
    headers: {
      "api-key": environment.apiKey
    }
  }

  getTodos() {
    return this.http.get<Todo[]>(environment.baseUrl, this.httpOptions)
      .pipe(catchError(this.catchErrorHandler.bind(this)))
      .subscribe((t) => {
      this.todos$.next(t)
    })
  }

  deleteTodo(todoId: string) {
    this.http.delete(`${environment.baseUrl}/${todoId}`, this.httpOptions).pipe(map(() => {
      return this.todos$.getValue().filter(i => i.id !== todoId)
    }))
      .pipe(catchError(this.catchErrorHandler.bind(this)))
      .subscribe(t => {
      this.todos$.next(t)
    })
  }

  createTodo(title: string) {
    this.http.post<Res>(`${environment.baseUrl}s`, {title}, this.httpOptions)
      .pipe(catchError(this.catchErrorHandler.bind(this)))
      .subscribe(res => {
        if (res.resultCode === 0) {
          this.todos$.next([res.data.item, ...this.todos$.getValue()])
        }
        this.error = res.messages
        console.log(this.error)
      })
  }

  private catchErrorHandler(err: HttpErrorResponse) {
    return EMPTY
  }
}
