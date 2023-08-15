let box1 = document.getElementById(`box1`)
let off = document.getElementById(`off`)
let on = document.getElementById(`on`)

let box2 = document.getElementById(`box2`)
let small = document.getElementById(`small`)
let big = document.getElementById(`big`)

let box3 = document.getElementById(`box3`)
let step1 = document.getElementById(`step1`)
let step2 = document.getElementById(`step2`)

let milliseconds = document.getElementById(`milliseconds`)

let ledOn = false
let sizeBig = false
let runningStep2 = false

let ledIntervalId
let sizeIntervalId
let runningIntervalId

box1.addEventListener(`click`, startToggleLed)
box2.addEventListener(`click`, startToggleSize)
box3.addEventListener(`click`, startToggleRunning)

milliseconds.focus()

function startToggleLed() {
  let millisecondsValue = milliseconds.value.trim()

  if (millisecondsValue != ``) {
    clearInterval(ledIntervalId)
    ledIntervalId = setInterval(toggleLed, millisecondsValue)
  }
}

function startToggleSize() {
  let millisecondsValue = milliseconds.value.trim()

  if (millisecondsValue != ``) {
    clearInterval(sizeIntervalId)
    sizeIntervalId = setInterval(toggleSize, millisecondsValue)
  }
}

function startToggleRunning() {
  let millisecondsValue = milliseconds.value.trim()

  if (millisecondsValue != ``) {
    clearInterval(runningIntervalId)
    runningIntervalId = setInterval(toggleRunning, millisecondsValue)
  }
}

function toggleLed() {
  if (ledOn == false) {
    off.style.display = `none`
    on.style.display = `block`
    ledOn = true
  } else {
    off.style.display = `block`
    on.style.display = `none`
    ledOn = false
  }
}

function toggleSize() {
  if (sizeBig == false) {
    small.style.display = `none`
    big.style.display = `block`
    sizeBig = true
  } else {
    small.style.display = `block`
    big.style.display = `none`
    sizeBig = false
  }
}

function toggleRunning() {
  if (runningStep2 == false) {
    step1.style.display = `none`
    step2.style.display = `block`
    runningStep2 = true
  } else {
    step1.style.display = `block`
    step2.style.display = `none`
    runningStep2 = false
  }
}
