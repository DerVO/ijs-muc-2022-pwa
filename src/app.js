import {bresenhamLine, getImage, toBlob} from "./helpers.js";

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d', {
  desynchronized: true
})

clearCanvas('white')

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

const fileOptions = {
  types: [{
    description: 'PNG files',
    accept: {'image/png': ['.png']}
  }]
}

const btnSave = document.querySelector('#save')
btnSave.addEventListener('click', async () => {
  const blob = await toBlob(canvas)
  const handle = await window.showSaveFilePicker(fileOptions)
  const writable = await handle.createWritable()
  await writable.write(blob)
  await writable.close()
})

const btnOpen = document.querySelector('#open')
btnOpen.addEventListener('click', async () => {
  const [handle] = await window.showOpenFilePicker(fileOptions)
  const file = await handle.getFile()
  const image = await getImage(file)
  ctx.drawImage(image, 0, 0)
})

const btnCopy = document.querySelector('#copy')
btnCopy.addEventListener('click', async () => {
  await navigator.clipboard.write([
    new ClipboardItem({'image/png': toBlob(canvas)})
  ])
})

const btnPaste = document.querySelector('#paste')
btnPaste.addEventListener('click', async () => {
  const clipboardItems = await navigator.clipboard.read()
  for (const clipboardItem of clipboardItems) {
    for (const type of clipboardItem.types) {
      if (type === 'image/png') {
        const blob = await clipboardItem.getType(type)
        const image = await getImage(blob)
        ctx.drawImage(image, 0, 0)
      }
    }
  }
})

const btnShare = document.querySelector('#share')
btnShare.addEventListener('click', async () => {
  const blob = await toBlob(canvas)
  const file = new File([blob], 'untitled.png', {type: 'image/png'})
  const item = {files: [file], title: 'untiteled.png'}
  if (navigator.share && navigator.canShare(item)) {
    await navigator.share(item)
  } else {
    alert('your browser does not support sharing')
  }
})

const btnClear = document.querySelector('#clear')
btnClear.addEventListener('click', async () => {
  clearCanvas('white')
})

function clearCanvas(color) {
  const oldColour = ctx.fillStyle
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = oldColour
}

if ('launchQueue' in window) {
  launchQueue.setConsumer(async params => {
    const [handle] = params.files
    if (handle) {
      const file = await handle.getFile()
      const image = await getImage(file)
      ctx.drawImage(image, 0, 0)
    }
  })
}