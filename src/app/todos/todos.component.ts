import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Res, Todo, TodoService} from "../servise/todo.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit, OnDestroy {
  constructor(private todoService: TodoService) {
  }

  todo: Todo[] = []
  title: string = ''
  todoId = ''
  error = []
  errorServer = ''
  subscription: Subscription = new Subscription()

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      {
        next: (res: Todo[]) => this.todo = res,
        error: (err: HttpErrorResponse) => {
          this.errorServer = err.message
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onChangeTitle(event: Event) {
    this.title = (event.currentTarget as HTMLInputElement).value
  }

  onChangeId(event: Event) {
    this.todoId = (event.currentTarget as HTMLInputElement).value
  }

  creteTodo() {
    this.subscription.add(
      this.todoService.creteTodo(this.title).subscribe((res: Res) => {
        if (res.resultCode === 0) {
          this.todo = [res.data.item, ...this.todo]
        }
        this.error = res.messages
      }))
  }

  deleteTodo() {
    this.subscription.add(
      this.todoService.deleteTodo(this.todoId).subscribe({
        next: () => {
          this.todo = this.todo.filter(t => t.id !== this.todoId)
        },
        error: (err: HttpErrorResponse) => {
          this.errorServer = err.error.message
        }
      }))
  }
}
