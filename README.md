# Speed
```bash
$ node benchmark.js
this x 3,465 ops/sec ±2.66% (90 runs sampled)
fifo x 142,633 ops/sec ±0.84% (97 runs sampled)
Fastest is fifo
```

As you see, this code is useless, so use [fifo](https://www.npmjs.org/package/fifo)

# FIFO
Javascript FIFO queue implemented using a object

# Usage is simple
``` js
var Queue = require('object-queue')
var queue = new Queue()

queue.push('first')
queue.push('second')

console.log(queue.first()) // prints first
console.log(queue.last())  // prints second

console.log(queue.shift()) // prints first
console.log(queue.shift()) // prints second
```

# License
MIT
