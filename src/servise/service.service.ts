import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class ServiceService {

  value$ = new BehaviorSubject<number>(1)
  value2$ = new BehaviorSubject(0)

  constructor() {
  }

  add() {
    this.value$.next(this.value$.getValue() + 1)
  }

  add2() {
    this.value2$.next(this.value2$.getValue() + 1)
  }

  dec2() {
    this.value2$.next(this.value2$.getValue() - 1)
  }

  dec() {
    this.value$.next(this.value$.getValue() - 1)
  }

}
