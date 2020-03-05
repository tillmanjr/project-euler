'use strict;'
const euler = require('../tdjrEuler')
const solution = require('./solution')


/* ========================================== */
/* Inputs                                     */

const problemNumber = 1

const problemTitle = 'Smallest multiple'

const problemDefinition = `2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`

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