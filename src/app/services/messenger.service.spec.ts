import { Messenger } from './messenger.service'

const msg1: Messenger = new Messenger()

const msg2: Messenger = new Messenger()

test('messaging', () => {
  msg1.emit('algo')
  msg2.emitter.subscribe(data => {
    expect(data).toBe('algo')
  })
})
