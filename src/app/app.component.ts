import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ParentComponent} from "./input/parent/parent.component";

interface IObg {
  name: string
  age: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    FormsModule,
    ParentComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
