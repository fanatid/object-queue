var test = require('tape')

var Queue = require('./index')


test('basics', function (t) {
  var queue = new Queue()

  t.equal(queue.size, 0)
  t.equal(queue.empty(), true)

  queue.push(undefined)
  t.equal(queue.size, 1)
  t.equal(queue.empty(), false)
  t.equal(queue.pop(), undefined)
  t.equal(queue.empty(), true)

  queue.push(null)
  t.equal(queue.pop(), null)

  queue.unshift(100)
  t.equal(queue.shift(), 100)

  queue.push('1')
  queue.push('2')
  t.equal(queue.shift(), '1')
  t.equal(queue.shift(), '2')

  queue.unshift(1)
  queue.unshift(2)
  t.equal(queue.pop(), 1)
  t.equal(queue.pop(), 2)

  queue.push(1)
  queue.unshift('2')
  queue.push(3)
  t.equal(queue.first(), '2')
  t.equal(queue.last(), 3)
  t.equal(queue.shift(), '2')
  t.equal(queue.shift(), 1)
  t.equal(queue.shift(), 3)

  t.end()
})
