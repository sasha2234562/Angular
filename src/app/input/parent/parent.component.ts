import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClildComponent} from "../clild/clild.component";

interface Person {
  firstName: string;
  lastName: string;
}

interface Lesson {
  peopleOne?: Person;
  peopleTwo?: Person;
  peopleThree?: Person;
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ClildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  isLoading = true

  constructor() {
    setInterval(() => {
      this.isLoading = !this.isLoading
    }, 1500)

  }

  greade: Array<string> = ['math:5']

  getGreade(gread: string) {
    this.greade.push(gread)
  }

  names: string[] = []

  getName(value: string) {
    this.names.unshift(value)
  }

  arr = [1, 2, 3]
  lessons: Lesson[] = [
    {
      peopleOne: {
        firstName: "Dasha",
        lastName: "Haritonova"
      }
    },
    {
      peopleTwo: {
        firstName: "Alina",
        lastName: "Safonova"
      }
    },
    {
      peopleThree: {
        firstName: "Masha",
        lastName: "Belova"
      }
    }
  ]
}
