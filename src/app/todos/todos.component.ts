import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";

interface Todo {
  addedDate: string
  id: string
  order: string
  title: string
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  todo: Todo[] = []
  title: string = ''
  todoId = ''

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", {
      withCredentials: true,
      headers: {
        "api-key": "02801dc9-c643-40b7-9ded-224fb486763d"
      }
    }).subscribe(res => {
      this.todo = res
    })
  }

  onChangeTitle(event: Event) {
    this.title = (event.currentTarget as HTMLInputElement).value
    console.log((event.currentTarget as HTMLInputElement).value)
  }

  onChangeId(event: Event) {
    this.todoId = (event.currentTarget as HTMLInputElement).value
  }

  creteTodo() {
    this.http.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: this.title}, {
      withCredentials: true,
      headers: {
        "api-key": "02801dc9-c643-40b7-9ded-224fb486763d"
      }
    }).subscribe(res => {

    })
  }

  deleteTodo() {
    this.http.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.todoId}`, {
      withCredentials: true,
      headers: {
        "api-key": "02801dc9-c643-40b7-9ded-224fb486763d"
      }
    }).subscribe(res => {
      this.todo = this.todo.filter(t => t.id !== this.todoId)
      console.log(res)
    })
  }
}
