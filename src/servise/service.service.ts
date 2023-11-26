import {Injectable} from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ServiceService {
  value = 110

  constructor() {
  }

  add() {
    this.value = this.value + 1
  }

  dec() {
    this.value = this.value - 1
  }

}
