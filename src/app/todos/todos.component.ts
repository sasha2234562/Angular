import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todo, TodoService} from "../servise/todo.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "../login/login/login.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoginComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {
  }

  todos$!: Observable<Todo[]>
  title: string = ''
  error = this.todoService.error
  errorServer = ''

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(true)
  })

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$
    this.todoService.getTodos()
  }

  onChangeDelete(todoId: string) {
    this.todoService.deleteTodo(todoId)
  }

  onChangeCreate(event: Event) {
    this.title = (event.currentTarget as HTMLInputElement).value
  }

  createTodo() {
    this.todoService.createTodo(this.title)
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }
}
