import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Res, Todo, TodoService} from "../servise/todo.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {
  }

  todos$!: Observable<Todo[]>
  title: string = ''
  todoId = ''
  error = []
  errorServer = ''

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$
    this.todoService.getTodos()
  }


  onChangeTitle(event: Event) {
    this.title = (event.currentTarget as HTMLInputElement).value
  }

  onChangeId(event: Event) {
    this.todoId = (event.currentTarget as HTMLInputElement).value
  }

  createTodo() {
    this.todoService.creteTodo(this.title)
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todoId)
  }
}
