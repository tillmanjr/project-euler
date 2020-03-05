'user strict;'

const fmtr = require('./formatter')
const ttp = require('./timePromise')
const runner = require('./solution-runner')
const checkFns = require('./check-functions')

module.exports = {
  defineProblem: fmtr.defineProblem,
  formatProblem: fmtr.formatProblem,
  timeFnPromise: ttp.timeFnPromise,
  runSolution: runner.run,
  checkFunctions: checkFns.checkFunctions
}