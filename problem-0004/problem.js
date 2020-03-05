'use strict;'
const euler = require('../tdjrEuler')
const solution = require('./solution')


/* ========================================== */
/* Inputs                                     */

const problemNumber = 4

const problemTitle = 'Largest palindrome product'

const problemDefinition = `A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.`

const expectedSolution = 42

/* ========================================== */

const definedProblem = euler.defineProblem(
  problemNumber,
  problemTitle,
  problemDefinition
)


// if the solution is valid if it is within Epsilon set true.
// for exact value equality set to false
const validWithinEpsilon = true
const checkFn = validWithinEpsilon
  ? euler.checkFunctions.withinEpsilon(expectedSolution)
  : euler.checkFunctions.equalToExpected(expectedSolution)

euler.runSolution(
  definedProblem,
  solution.solveAsync
)
  .then( (value) => {
    const result = checkFn(value) ? 'Passed' : `Failed `
    console.log( result )
  })