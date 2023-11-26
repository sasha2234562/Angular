import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from "../../servise/service.service";

@Component({
  selector: 'app-parent-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-2.component.html',
  styleUrl: './parent-2.component.scss',
  providers: [ServiceService]
})
export class Parent2Component implements OnInit {
  constructor(private ServiceService: ServiceService) {
  }

  value2 = 0

  add() {
    this.ServiceService.add()
  }

  ngOnInit() {
    this.ServiceService.value$.subscribe(v2 => {
      this.value2 = v2
    })
  }
}
