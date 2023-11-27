import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from "../../servise/service.service";
import {Observable} from "rxjs";
import {ServiceLogService} from "../../servise/service-log.service";

@Component({
  selector: 'app-parent-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-2.component.html',
  styleUrl: './parent-2.component.scss',
  providers: [ServiceService]
})
export class Parent2Component implements OnInit {
  constructor(private ServiceService: ServiceService, private ServiceLogService: ServiceLogService) {
  }

  value2 = 0
  value2$ = new Observable()

  add() {
    this.ServiceService.add()
    this.ServiceLogService.log("add1", "info")
  }

  add2() {
    this.ServiceService.add2()
    this.ServiceLogService.log("add2", "error")
  }

  ngOnInit() {
    this.ServiceService.value$.subscribe(v2 => {
      this.value2 = v2
    })

    this.value2$ = this.ServiceService.value2$
  }
}
