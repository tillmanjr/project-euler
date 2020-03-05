'use strict;'

const start = 1
const end = 1000

let accum = 0
let countTo5 = 0
let countTo3 = 0

const isMultOf3 = () => countTo3 === 3
const isMultOf5 = () => countTo5 === 5

const solve = () => {
  for (let n = start; n < end; n++ ) {
    countTo5++
    countTo3++
    const multOf3 = isMultOf3(n)
    const multOf5 = isMultOf5(n)
    if (multOf3 || multOf5) {
      accum += n
      if (multOf3) {countTo3  = 0}
      if (multOf5) {countTo5  = 0}
    }
  }
  return accum
}

const solveAsync = () => {
  return new Promise((resolve) => {
    const result = solve()
    resolve(result)
  })
}


module.exports = {
  solveAsync
}