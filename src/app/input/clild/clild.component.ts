import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-clild',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clild.component.html',
  styleUrl: './clild.component.scss'
})
export class ClildComponent {

  @Output() sengName = new EventEmitter<string>()
  name = ''

  createName() {
    this.sengName.emit(this.name)
  }

  inpitGreate = ''
  @Output() sengGreateEvent = new EventEmitter<string>()

  sengGreate() {
    this.sengGreateEvent.emit(this.inpitGreate)
  }
}
