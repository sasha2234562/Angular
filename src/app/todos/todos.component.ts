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
}
