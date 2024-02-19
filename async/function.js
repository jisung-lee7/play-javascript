/**
 ****************************************************************************************************
 * ### Function
 ****************************************************************************************************
 * fundamental building blcok in the program
 * subprogram can be used multiple times
 * performs a task or calculates a value

 * Function declaration
 * - function name(param1, param2) { body... return;}
 * - one function === one thing
 *   e.g., createCardAndPoint -> createCard, createPoint
 * - function is object in JS
*/

function printHello() {
  console.log('Hello')
}

printHello()

function log(message) {
  console.log(message)
}

log('Hello')

/**
 ****************************************************************************************************
 * ### Parameters
 ****************************************************************************************************
 * primitive parameters : passed by value
 * object parameters : passed by reference
 */
function changeName(obj) {
  obj.name = 'JisungLee'
}
const jisung = { name: 'jisung' }
changeName(jisung)
console.log(jisung)

/**
 ****************************************************************************************************
 * ### Default parameters (added in ES6)
 ****************************************************************************************************
 */
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`)
}
showMessage('Hi')

/**
 ****************************************************************************************************
 * ### Rest parameters (added in ES6)
 ****************************************************************************************************
 */
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }

  for (const arg of args) {
    console.log(arg)
  }
}
printAll('js', 'kurt', 'JisungLee')
