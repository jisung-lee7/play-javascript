'use strict'
/**
 ****************************************************************************************************
 * ### Function(Function Declaration)
 ****************************************************************************************************
 * Fundamental building block in the program
 * Subprogram can be used multiple times
 * Performs a task or calculates a value
 * Function declarations can be called from anywhere. The reason is due to hoisting.

 * Function declaration
 *   - function name(param1, param2) { body... return; }
 *   - one function === one thing
 *     e.g., createCardAndPoint -> createCard, createPoint
 *   - function is object in JS
*/
console.log(`\n[ Function(Function Declaration) ]`)

{
  // function printHello() {
  //   console.log(`Hello`)
  // }
  //
  // printHello()
}

{
  // function log(message) {
  //   console.log(message)
  // }
  //
  // log('Hello')
}
/**
 ****************************************************************************************************
 * ### Parameters
 ****************************************************************************************************
 * Primitive parameters : passed by value
 * Object parameters    : passed by reference
 */
console.log(`\n[ Parameters ]`)

{
  // function changeName(obj) {
  //   obj.name = 'JisungLee'
  // }
  // const jisung = { name: 'jisung' }
  //
  // changeName(jisung)
  //
  // console.log(jisung)
}

/**
 ****************************************************************************************************
 * ### Default parameters (added in ES6)
 ****************************************************************************************************
 */
console.log(`\n[ Default parameters (added in ES6) ]`)

{
  // function showMessage(message, from = 'unknown') {
  //   console.log(`${message} by ${from}`)
  // }
  // showMessage('Hi')
}

/**
 ****************************************************************************************************
 * ### Arguments (Rarely used, recommend 'Rest parameters')
 ****************************************************************************************************
 * Access all arguments passed to a function
 * A local variable available within a function
 * Array like object.
 * Does not have built-in array methods(like forEach, map, ...)
 */
console.log(`\n[ Arguments ]`)

{
  function showName(name) {
    console.log(`c.log ## arguments ##`, arguments)
    console.log(`c.log ## arguments.length ##`, arguments.length)
    console.log(`c.log ## arguments[0] ##`, arguments[0])
    console.log(`c.log ## arguments[1] ##`, arguments[1])
  }

  showName('Jisung', 'Jenny')
}

/**
 ****************************************************************************************************
 * ### Rest parameters (added in ES6)
 ****************************************************************************************************
 *
 */
console.log(`\n[ Rest parameters (added in ES6) ]`)

{
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(`c.log ## args[i] ##`, args[i])
    }

    for (const arg of args) {
      console.log(`c.log ## arg ##`, arg)
    }
  }
  printAll('js', 'kurt', 'JisungLee')
}

/**
 ****************************************************************************************************
 * ### Function expression
 ****************************************************************************************************
 * What is diff? (Function declaration vs Function expression)
 * A function declaration can be called earlier than it is defined. (hoisted)
 * A function expression is created when the execution reaches it.
 * Anonymous function
 */
console.log(`\n[ Function expression ]`)

{
  function sum(a, b) {
    return a + b
  }
  const print = function () {
    // Anonymous function
    console.log(`print`)
  }
  print()

  const printAgain = print
  printAgain()

  const sumAgain = sum
  console.log(sumAgain(1, 3))
}

/**
 ****************************************************************************************************
 * ### Callback function using function expression
 ****************************************************************************************************
 */
console.log(`\n[ Callback function using function expression ]`)

{
  function randomQuiz(answer, yesCallback, noCallback) {
    if (answer === 'helloworld') {
      yesCallback()
    } else {
      noCallback()
    }
  }

  // Anonymous function
  const printYes = function () {
    console.log(`yes!`)
  }

  // named function
  // better debugging in debugger's stack traces
  const printNo = function print() {
    console.log(`no!`)
  }

  randomQuiz('wrong', printYes, printNo)
  randomQuiz('helloworld', printYes, printNo)
}

/**
 ****************************************************************************************************
 * ### Arrow function
 ****************************************************************************************************
 * An arrow function is a type of function expression.
 * Always anonymous
 * Arrow function doesn't have their own 'this' context. 
   When using 'this' inside an arrow function, it inherits the value from surrounding context.
   (In a browser environment, the global object is 'window')

 */
console.log(`\n[ Arrow function ]`)

{
  const simplePrint = () => console.log(`simplePrint!`)
  const add = (a, b) => a + b
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b
  }

  // DON'T USE arrow function in object method
  {
    let functionObj = {
      name: 'jisung',
      sayThis: function () {
        console.log(`c.log ## this ##`, this)
      }
    }

    functionObj.sayThis() // return this object

    let arraowFunctionObj = {
      name: 'jisung',
      sayThis: () => {
        console.log(`c.log ## this ##`, this)
      }
    }

    arraowFunctionObj.sayThis() // return window
  }
}

/**
 ****************************************************************************************************
 * ### Call, Apply, Bind
 ****************************************************************************************************
 * Call
 *   - The 'call' method can be used on any function and allows you to set 'this' to a specific value.
 * Apply
 *   - The apply method is similar to call, but it takes arguments as an array.
 * Bind
 *   - You can permanently change the this value of a function.
 */
console.log(`\n[ Call, Apply, Bind ]`)

// call
{
  const jisung = {
    name: 'Jisung'
  }

  const jenny = {
    name: 'Jenny'
  }

  function showThisName() {
    console.log(`c.log ## this.name ##`, this.name)
  }

  // showThisName() // error
  showThisName.call(jisung)
  showThisName.call(jenny)

  function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
  }

  update.call(jisung, 1999, 'engineer')
  console.log(`c.log ## use call jisung ##`, jisung)

  update.call(jenny, 2000, 'actor')
  console.log(`c.log ## use call jenny ##`, jenny)
}

// apply
{
  const jisung = {
    name: 'Jisung'
  }

  const jenny = {
    name: 'Jenny'
  }

  function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
  }

  update.apply(jisung, [1999, 'engineer'])
  console.log(`c.log ## use apply jisung ##`, jisung)

  update.apply(jenny, [2000, 'actor'])
  console.log(`c.log ## use apply jenny ##`, jenny)
}

{
  const minNum = Math.min(3, 10, 1, 6, 4)
  const maxNum = Math.max(3, 10, 1, 6, 4)

  console.log(`c.log ## minNum ##`, minNum)
  console.log(`c.log ## maxNum ##`, maxNum)
}

{
  const minNum = Math.min([3, 10, 1, 6, 4])
  const maxNum = Math.max([3, 10, 1, 6, 4])

  console.log(`c.log ## minNum ##`, minNum) // NaN
  console.log(`c.log ## maxNum ##`, maxNum) // NaN
}

{
  const nums = [3, 10, 1, 6, 4]
  const minNum = Math.min(...nums)
  const maxNum = Math.max(...nums)

  console.log(`c.log ## minNum ##`, minNum)
  console.log(`c.log ## maxNum ##`, maxNum)
}

{
  const nums = [3, 10, 1, 6, 4]
  const minNum = Math.min.call(null, ...nums)
  const maxNum = Math.max.apply(null, nums)

  console.log(`c.log ## minNum ##`, minNum)
  console.log(`c.log ## maxNum ##`, maxNum)
}

// bind
{
  const jisung = {
    name: 'Jisung'
  }

  function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
  }

  const updateJisung = update.bind(jisung)

  updateJisung(1997, 'singer')

  console.log(`c.log ## use bind jisung ##`, jisung)
}

{
  const user = {
    name: 'Jisung',
    showName: function () {
      console.log(`c.log ## hello, ${this.name} ##`)
    }
  }

  user.showName()

  let fn = user.showName

  // fn() // error - lost this
  fn.call(user)
  fn.apply(user)

  let bindFn = fn.bind(user)
  bindFn()
}

/**
 ****************************************************************************************************
 * ### IIFE(Immediately Invoked Function Expression)
 ****************************************************************************************************
 */
console.log(`\n[ IIFE(Immediately Invoked Function Expression) ]`)

{
  ;(function hello() {
    console.log(`IIFE`)
  })()
}

/**
 ****************************************************************************************************
 * ### setTimeout / setInterval
 ****************************************************************************************************
 */
console.log(`\n[ setTimeout/ setInterval ]`)

{
  function fn() {
    console.log(`c.log ## 3 ##`, 3)
  }

  setTimeout(fn, 3000)
}

{
  setTimeout(function () {
    console.log(`c.log ## 3 ##`, 3)
  }, 3000)
}

{
  function showName(name) {
    console.log(`c.log ## name ##`, name)
  }

  setTimeout(showName, 3000, 'Jisung')
}

{
  function showName(name) {
    console.log(`c.log ## name ##`, name)
  }

  const tId = setTimeout(showName, 3000, 'Jisung clear')
  clearTimeout(tId)
}

{
  function showName(name) {
    console.log(`c.log ## name ##`, name)
  }
  const tId = setInterval(showName, 3000, 'Jisung')
  clearInterval(tId)
}

// delay 0
{
  setTimeout(function () {
    // Scheduling functions run after the currently executing script has finished.
    console.log(`c.log ## test delay 0 in function ##`)
  }, 0)

  console.log(`c.log ## test delay 0 ##`)
}
