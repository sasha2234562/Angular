import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class ServiceService {
  // value = 110
  value$ = new BehaviorSubject<number>(1)

  constructor() {
  }

  add() {
    this.value$.next(this.value$.getValue() + 1)
  }

  dec() {
    this.value$.next(this.value$.getValue() - 1)
  }

}
