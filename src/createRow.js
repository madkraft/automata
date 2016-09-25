export default createRow

function createRow () {
  const row = document.createElement('div')
  const container = document.getElementById('container')
  row.classList.add('row')
  container.appendChild(row)
  spamCells(row, 22)
  selectLast()
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
  // lastRow.childNodes.forEach(function (node) {
  //   let previousCell = node.previousSibling
  //   let currentCell = node
  //   let nextCell = node.nextSibling
  // })
}

function processRow (rowDiv, parentRowDiv) {

}