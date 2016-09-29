export default createAutomata

function createAutomata () {
  const row = document.createElement('div')
  const container = document.getElementById('container')
  row.classList.add('row')
  container.appendChild(row)
  spamCells(row, 401)

  let interval = setInterval(function () {
    dupliateRow(selectLast())
    if (document.querySelectorAll('.row').length > 210) {
      clearInterval(interval)
    }
  }, 20)
}

function createCell() {
  const cell = document.createElement('div')
  cell.classList.add(
    'cell',
    randomize() ? 'active' :  'inactive'
  )
  return cell
}

function spamCells(element, number) {
  for (let i = 0; i < number; i++) {
    element.appendChild(createCell())
  }
}

function randomize () {
  return Math.round(Math.random())﻿
}

function selectLast () {
  let rows = document.querySelectorAll('.row')
  let lastRow = rows[rows.length - 1]
  return lastRow
}

function dupliateRow (row) {
  const dupnode = row.cloneNode(true)
  processRow(dupnode, row)
  document.body.appendChild(dupnode)
}

function processRow (current, parent) {
  for (var i = 0; i < parent.childNodes.length; i++) {
    let parentNodes = parent.childNodes
    let currentNode = current.childNodes[i]

    let pastSelf = parentNodes[i]
    let previousCell = parentNodes[i].previousSibling ||
      parentNodes[parentNodes.length - 1]
    let nextCell = parentNodes[i].nextSibling ||
      parentNodes[0]

    let applyRule = applyIfMatchesRule.bind(null, currentNode, previousCell, pastSelf, nextCell)

    applyRule([1, 1, 1], false)
    applyRule([1, 1, 0], false)
    applyRule([1, 0, 1], true)
    applyRule([1, 0, 0], true)
    applyRule([0, 1, 1], true)
    applyRule([0, 1, 0], false)
    applyRule([0, 0, 1], false)
    applyRule([0, 0, 0], true)

  }
}

function isActive (cell) {
  if (cell.classList.contains('active')) {
    return 1
  } else {
    return 0
  }
}

function applyIfMatchesRule (target, previousCell, pastSelf, nextCell, rule, ruleValue) {
  let matchesRule = rule[0] === isActive(previousCell) &&
                    rule[1] === isActive(pastSelf) &&
                    rule[2] === isActive(nextCell)

  if (matchesRule) {
    setIsActive(target, ruleValue)
  }
}

function setIsActive(element, active) {
  if (active) {
    element.classList.remove('inactive')
    element.classList.add('active')
  } else {
    element.classList.remove('active')
    element.classList.add('inactive')
  }

}