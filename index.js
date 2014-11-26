var MIN_VALUE = 0
var MAX_VALUE = Math.pow(2, 32)


/**
 * @class Queue
 */
function Queue() {
  this._data = {}
  this._first = MAX_VALUE / 2
  this._size = 0
}

Object.defineProperty(Queue.prototype, 'size', {get: function () {
  return this._size
}})

/**
 * @return {boolean}
 */
Queue.prototype.empty = function () {
  return this._size === 0
}

/**
 * @return {*}
 */
Queue.prototype.first = function () {
  return this._data[this._first]
}

/**
 * @return {*}
 */
Queue.prototype.last = function () {
  return this._data[(this._first + this._size - 1) % MAX_VALUE]
}

/**
 * @param {*} value
 */
Queue.prototype.unshift = function (value) {
  if (this._first === MIN_VALUE) {
    this._first = MAX_VALUE
  }
  this._first -= 1
  this._size += 1

  this._data[this._first] = value
}

/**
 * @return {*}
 */
Queue.prototype.shift = function () {
  if (this._size > 0) {
    var value = this._data[this._first]
    delete this._data[this._first]

    this._first += 1
    if (this._first === MAX_VALUE) {
      this._first = MIN_VALUE
    }
    this._size -= 1

    return value
  }
}

/**
 * @param {*} value
 */
Queue.prototype.push = function (value) {
  var index = (this._first + this._size) % MAX_VALUE
  this._data[index] = value

  this._size += 1
}

/**
 * @return {*}
 */
Queue.prototype.pop = function () {
  if (this._size > 0) {
    var index = (this._first + this._size - 1) % MAX_VALUE
    var value = this._data[index]
    delete this._data[index]

    this._size -= 1

    return value
  }
}


module.exports = Queue
