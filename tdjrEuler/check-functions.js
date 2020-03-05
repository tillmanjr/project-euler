'use strict;'

const absDiff = (lhs, rhs) => Math.abs(lhs - rhs)
const epsilon =  0.00000001

const checkFunctions = {
  equalToExpected: (expectedValue) => { const compareTo = expectedValue; return function (x) { return x === compareTo} },
  withinEpsilon: (expectedValue) => { const compareTo = expectedValue; return function (x) { return absDiff(compareTo, x) <= epsilon } }
}

module.exports = {
  checkFunctions: checkFunctions
}