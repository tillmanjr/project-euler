'use strict;'

const solve = () => {
  const limit = 4000000

  let prev = 0
  let next = 1

  let accum = 0

  while (next + prev < limit) {
    const current = next + prev
    if (current % 2 === 0) {
      accum += current
    }
    prev = next
    next = current
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