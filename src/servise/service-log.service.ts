import {Injectable} from '@angular/core';
type logType = 'error' | 'success' | 'info' | 'warning'
@Injectable({
  providedIn: 'root'
})
export class ServiceLogService {

  log(message: string, type: logType) {
    console.log(`%c ${message}`, this.getType(type))
  }

  getType(type: logType) {
    switch (type) {
      case 'success':
        return 'background: green; color: white;'
      case 'info':
        return 'background: blue; color: white;'
      case 'error':
        return 'background: red; color: white;'
      case 'warning':
        return 'background: orange; color: black;'

      default:
        return ''
    }
  }
}
