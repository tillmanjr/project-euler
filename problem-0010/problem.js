'use strict;'
const euler = require('../tdjrEuler')
const solution = require('./solution')


/* ========================================== */
/* Inputs                                     */

const problemNumber = 10

const problemTitle = 'Summation of primes'

const problemDefinition = `The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.`

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