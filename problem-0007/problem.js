'use strict;'
const euler = require('../tdjrEuler')
const solution = require('./solution')


/* ========================================== */
/* Inputs                                     */

const problemNumber = 7

const problemTitle = '10001st prime'

const problemDefinition = `By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?`

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