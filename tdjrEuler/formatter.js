'use strict;'

const PROJECT_EULER = 'Project Euler'
const PROBLEM = 'Problem'

const NEW_LINE = '\n'

const charForN = (chr, n) => chr.repeat(n)

// prefix each new line including the first with a given prefix
const prefixEachLine = (lines, prefix) => {
  const replaceWith = `${NEW_LINE}${prefix}`
  const allButFirst = lines.split(NEW_LINE).join(replaceWith)
  return `${prefix}${allButFirst}`
}

const sampleProblem = {
  problemNumber: 0,
  problemTitle: 'Placeholder for Problem Title',
  problemDefinition: `This is a placeholder
for any given problem's definition`
}

const defineProblem = (problemNumber, problemTitle, problemDefinition) => {
  return {problemNumber, problemTitle, problemDefinition}
}

const formatProblem = (definedProblem, answer, timeToSolveMS = 'unknown') => {
  const wdth = 60
  const wdthHalf = Math.floor(wdth / 2)
  const indentWdth = 5
  const indent = charForN(' ', indentWdth)

  const border = charForN('=', wdth)
  const sep = charForN('-', wdth)

  const {problemNumber, problemTitle, problemDefinition} = definedProblem

  const padPE = wdthHalf - Math.floor(PROJECT_EULER.length/2) - 1
  const fmtProblemNumber = problemNumber.toString().padStart(4, '0')
  const problemNumberStr = PROBLEM + fmtProblemNumber

  const list = [
    border,
    `${' '.padStart(padPE)} ${PROJECT_EULER} `,
    problemNumberStr,
    `${indent}${problemTitle}`,
    ' ',
    'Description',
    prefixEachLine(problemDefinition, indent),
    ' ',
    sep,
    `Solution: ${answer}        solved in ${timeToSolveMS} ms`,
    border
  ]

  return list.join(NEW_LINE)
}

module.exports = {
  defineProblem,
  formatProblem
}