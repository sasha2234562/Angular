import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from "../../servise/service.service";
import {Observable} from "rxjs";

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
  value2$ = new Observable()

  add() {
    this.ServiceService.add()
  }

  add2() {
    this.ServiceService.add2()
  }

  ngOnInit() {
    this.ServiceService.value$.subscribe(v2 => {
      this.value2 = v2
    })

    this.value2$ = this.ServiceService.value2$
  }
}
