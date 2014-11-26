var Benchmark = require('benchmark')
var FIFO = require('fifo')
var Queue = require('./index')


function getFn(Cls) {
  var queue = new Cls()
  var i
  return function () {
    for (i = 0; i < 100; ++i) {
      queue.push(i)
    }
    for (i = 0; i < 100; ++i) {
      queue.shift(i)
    }
  }
}

new Benchmark.Suite()
  .add('this', getFn(Queue))
  .add('fifo', getFn(FIFO))
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'))
  })
  .run()
