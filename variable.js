/**
 ****************************************************************************************************
 * ### Use strict
 ****************************************************************************************************
 * Added in ES5
 * Use this for Vanilla javascript
 */
'use strict'

/**
 ****************************************************************************************************
 * ### Variable
 ****************************************************************************************************
 * Var - don't ever use this
 * Var has no block scope
 * Hoisting - move declaration from bottom to top

(added in ES6)
 * Let - rw(read/write)  
 * Only use let if variable needs to change.

 * Constant - r(read only)
 * Use const whenever possible.

 * Data types
 *   - Immutable : primitive types, frozen objects (e.g., object.freeze())
 *   - Mutable : all objects by default are mutable in JS

 * Favor immutable data type always for a few reasons:
 *    - Security
 *    - Thread safety
 *    - Reduce human mistakes
 */

/**
 ****************************************************************************************************
 * ### Variable types
 ****************************************************************************************************
 * Primitive - Single item
 *  - number, string, boolean, null, undefined, symbol

 * Object
 *  - Box container by building single items

 * Function
 *  - Javascript supports first-class function

 * First-class function
 *  - Functions are treated like any other variable
 *  - Can be assigned as a value to variable
 *  - Can be passed as an argument to other functions
 *  - Can be returned by another function
 */

// number
const nInteger = 7 // integer :number
const nFloat = 7.1 // decimal number :number
console.log(`value(nInteger): ${nInteger}, type: ${typeof nInteger}`)
console.log(`value(nFloat): ${nFloat}, type: ${typeof nFloat}`)

// Special numeric values in type number
//   - infinity, -infinity, NaN
const nInfinity = 1 / 0
const nNegativeInfinity = -1 / 0
const nNaN = 'not a number' / 2
console.log(`value(nInfinity): ${nInfinity}, type: ${typeof nInfinity}`)
console.log(
  `value(nNegativeInfinity): ${nNegativeInfinity}, type: ${typeof nNegativeInfinity}`
)
console.log(`value(nNaN): ${nNaN}, type: ${typeof nNaN}`)

// bigInt (fairly new, don't use it yet)
const nBigInt = 1234567890123456789012345678901234567890n
console.log(`value(nBigInt): ${nBigInt}, type: ${typeof nBigInt}`)

// string
const strJS = 'JavaScript'
const strGreeting = 'Hello, ' + strJS
console.log(`value(strGreeting): ${strGreeting}, type: ${typeof strGreeting}`)

const strJSGreeting = `Hi ${strJS}!` // template(string) literals
console.log(
  `value(strJSGreeting): ${strJSGreeting}, type: ${typeof strJSGreeting}`
)

// boolean
// false: 0, null, undefined, Nan, ``
// true: any other value

const bBoolean = true
const bTest = 3 < 1 // false
console.log(`value(bBoolean): ${bBoolean}, type: ${typeof bBoolean}`)
console.log(`value(bTest): ${bTest}, type: ${typeof bTest}`)

// null
let nothing = null
console.log(`value(nothing): ${nothing}, type: ${typeof nothing}`)

// undefined
let x
let y = undefined
console.log(`value(x): ${x}, type: ${typeof x}`)
console.log(`value(y): ${y}, type: ${typeof y}`)

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2) // false

const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2) // true

console.log(`value(symbol1): ${symbol1.description}, type: ${typeof symbol1}`)

/**
 ****************************************************************************************************
 * ### Dynamic typing : dynamically typed language
 ****************************************************************************************************
 */
let text = 'hello'
console.log(text.charAt(0)) // h - runtime error
console.log(`value(text): ${text}, type: ${typeof text}`)
text = 1
console.log(`value(text): ${text}, type: ${typeof text}`)
text = '7' + 5
console.log(`value(text): ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value(text): ${text}, type: ${typeof text}`)
console.log(text.charAt(0)) // error - runtime error
