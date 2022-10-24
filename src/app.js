import {bresenhamLine, getImage, toBlob} from "./helpers.js";

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d', {
  desynchronized: true
})

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = 'black'

let previousPoint = null
canvas.addEventListener('pointerdown', event => {
  previousPoint = {x: event.offsetX, y: event.offsetY}
})
canvas.addEventListener('pointermove', event => {
  if (previousPoint === null) return
  const currentPoint = {x: event.offsetX, y: event.offsetY}
  for (let drawPoint of bresenhamLine(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)) {
    ctx.fillRect(drawPoint.x, drawPoint.y, 2, 2)
  }
  previousPoint = currentPoint
})
canvas.addEventListener('pointerup', () => {
  previousPoint = null
})

const txtColor = document.querySelector('#color')
txtColor.addEventListener('change', () => {
  ctx.fillStyle = txtColor.value
})