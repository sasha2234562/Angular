import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from "../../servise/service.service";
import {Observable} from "rxjs";
import {ServiceLogService} from "../../servise/service-log.service";


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
  value2$ = new Observable()

  constructor(private ServiceService: ServiceService, private ServiceLogService: ServiceLogService) {
  }

  dec() {
    this.ServiceService.dec()
    this.ServiceLogService.log("dec1", "warning")
  }

  dec2() {
    this.ServiceService.dec2()
    this.ServiceLogService.log("dec2", "success")
  }

  ngOnInit(): void {
    this.ServiceService.value$.subscribe((v) => {
      this.value = v
    })
    this.value2$ = this.ServiceService.value2$
  }
}
