import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from "../../servise/service.service";

interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [ServiceService]
})
export class ParentComponent implements OnInit {
  value = 0

  constructor(private ServiceService: ServiceService) {}

  dec() {
    this.ServiceService.dec()
  }

  ngOnInit(): void {
    this.ServiceService.value$.subscribe((v)=> {
      this.value = v
    })
  }

}
