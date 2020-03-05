'use strict;'

const formatProblem = require('./formatter').formatProblem
const timeFnPromise = require('./timePromise').timeFnPromise

const sendToConsole = (result) => console.log(result)

let run = function(
  problemDefinition,
  asyncSolutionFn
) {
  return new Promise((resolve, reject) => {
    const timedSolution = timeFnPromise(asyncSolutionFn)
    timedSolution()
      .then((values)=>{
        const {ret, elapsedTime} = values
        const formatted = formatProblem(problemDefinition, ret, elapsedTime)
        sendToConsole(formatted)
        resolve(ret)
    })
  })
}

module.exports = {
  run: run
}