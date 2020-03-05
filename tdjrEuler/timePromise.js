'use strict;'

// takes a fn that returns a promise, then when called includes the elapsed time in the resolution
// from https://github.com/dan3721/js-tool-chest/blob/master/src/util/timeFnPromise.js
const timeFnPromise = (fn) => (...args) => {
  const start = Date.now()
  const promise = fn(...args)
  if (!promise.then) {
      throw 'Expected function to return a Promise!'
  }
  const calcElapsedTime = (ret) => {
      return {ret, elapsedTime: Date.now() - start}
  }
  return promise.then(calcElapsedTime, calcElapsedTime)
}

module.exports = {
  timeFnPromise
}