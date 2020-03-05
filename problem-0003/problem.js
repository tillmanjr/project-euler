
'use strict;'
const euler = require('../tdjrEuler')
const solution = require('./solution')

/* ========================================== */
/* Inputs                                     */

const problemNumber = 3

const problemTitle = 'Largest prime factor'

const problemDefinition = `The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?`

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