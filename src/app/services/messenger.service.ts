import { Injectable, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Messenger {
  private eventEmitter: EventEmitter<string> = new EventEmitter()

  emit(data) {
    this.emitter.emit(data)
  }
  get emitter() {
    return this.eventEmitter
  }
}
