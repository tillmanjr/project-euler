'use strict;'
const euler = require('../tdjrEuler')
const solution = require('./solution')


/* ========================================== */
/* Inputs                                     */

const problemNumber = 0

const problemTitle = 'Placeholder for Problem Title'

const problemDefinition = `This is a placeholder
for any given problem's definition`

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