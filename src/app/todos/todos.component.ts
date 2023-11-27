import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Res, Todo, TodoService} from "../servise/todo.service";

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

  todo: Todo[] = []
  title: string = ''
  todoId = ''

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res: Todo[]) => {
      console.log(res)
      this.todo = res
    })
  }

  onChangeTitle(event: Event) {
    this.title = (event.currentTarget as HTMLInputElement).value
  }

  onChangeId(event: Event) {
    this.todoId = (event.currentTarget as HTMLInputElement).value
  }

  creteTodo() {
    this.todoService.creteTodo(this.title).subscribe((res: Res) => {
      this.todo = [res.data.item, ...this.todo]
    })
  }


  deleteTodo() {
    this.todoService.deleteTodo(this.todoId).subscribe(() => {
      this.todo = this.todo.filter(t => t.id !== this.todoId)
    })
  }
}
