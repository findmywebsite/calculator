let clear = document.getElementById('r1-1')
let remainder = document.getElementById('r1-2')
let divide = document.getElementById('r1-3')
let seven = document.getElementById('r2-1')
let eight = document.getElementById('r2-2')
let nine = document.getElementById('r2-3')
let multiply = document.getElementById('r2-4')
let four = document.getElementById('r3-1')
let five = document.getElementById('r3-2')
let six = document.getElementById('r3-3')
let subtract = document.getElementById('r3-4')
let one = document.getElementById('r4-1')
let two = document.getElementById('r4-2')
let three = document.getElementById('r4-3')
let add = document.getElementById('r4-4')
let zero = document.getElementById('r5-1')
let decimal = document.getElementById('r5-2')
let equal = document.getElementById('r5-3')
let output = document.getElementById('output')

let arrayOfButtonElements = [
  clear,
  remainder,
  divide,
  seven,
  eight,
  nine,
  multiply,
  four,
  five,
  six,
  subtract,
  one,
  two,
  three,
  add,
  zero,
  decimal,
  equal
]

let expression = {
  numArray: [],
  opArray: [],
  numString: '',
  ifJustSubmit: true
}

function handleClear() {
  expression = {
    numArray: [],
    opArray: [],
    numString: '',
    ifJustSubmit: true
  }
  output.value = ''
}

function handleOperation(o) {
  if (o) {
    if (expression.opArray.length > 0) {
      handleSubmit()
      expression = {
        numArray: [],
        opArray: [],
        numString: '',
        ifJustSubmit: true
      }
    } else {
      expression.numArray.push(expression.numString)
      expression.opArray.push(o)
      expression.numString = ''
      output.value = expression.numString
    }
  } else {
    expression.numArray.push(expression.numString)
  }
}

function handleSubmit() {
  handleOperation()
  console.log(expression.numArray.length, expression.opArray.length)
  if (expression.numArray.length > expression.opArray.length) {
    if (expression.opArray[0] === '+') {
      output.value =
        parseInt(expression.numArray[0]) + parseInt(expression.numArray[1])
    } else if (expression.opArray[0] === '-') {
      output.value =
        parseInt(expression.numArray[0]) - parseInt(expression.numArray[1])
    } else if (expression.opArray[0] === '/') {
      output.value =
        parseInt(expression.numArray[0]) / parseInt(expression.numArray[1])
    } else if (expression.opArray[0] === '%') {
      output.value =
        parseInt(expression.numArray[0]) % parseInt(expression.numArray[1])
    } else if (expression.opArray[0] === 'X') {
      output.value =
        parseInt(expression.numArray[0]) * parseInt(expression.numArray[1])
    }
  } else {
    output.value = 'The expression is not possible.'
  }
  expression = {
    numArray: [],
    opArray: [],
    numString: '',
    ifJustSubmit: false
  }
}

function handleNumbers(num) {
  if (expression.ifJustSubmit) {
    expression.numString += num
    output.value = expression.numString
  } else {
    output.value = ''
    expression.numString += num
    output.value = expression.numString
    expression.ifJustSubmit = true
  }
}

let handleClick = (e) => {
  switch (e.target.value) {
    case 'C':
      handleClear()
      break
    case '%':
      handleOperation('%')
      break
    case '/':
      handleOperation('/')
      break
    case 'X':
      handleOperation('X')
      break
    case '-':
      handleOperation('-')
      break
    case '+':
      handleOperation('+')
      break
    case '=':
      handleSubmit()
      break
    case '.':
      handleNumbers('.')
      break
    case '9':
      handleNumbers(9)
      break
    case '8':
      handleNumbers(8)
      break
    case '7':
      handleNumbers(7)
      break
    case '6':
      handleNumbers(6)
      break
    case '5':
      handleNumbers(5)
      break
    case '4':
      handleNumbers(4)
      break
    case '3':
      handleNumbers(3)
      break
    case '2':
      handleNumbers(2)
      break
    case '1':
      handleNumbers(1)
      break
    case '0':
      handleNumbers(0)
      break
  }
}

arrayOfButtonElements.forEach((element) => {
  element.addEventListener('click', handleClick)
})
