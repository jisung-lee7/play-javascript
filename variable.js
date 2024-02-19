/**
 ****************************************************************************************************
 * ### use strict
 ****************************************************************************************************
 * added in ES5
 * use this for Vanilla javascript
 */
'use strict'

/**
 ****************************************************************************************************
 * ### Variable
 ****************************************************************************************************
 * var - don't ever use this
 * var has no block scope
 * hoisting - move declaration from bottm to top

(added in ES6)
 * let - rw(read/write)  
 * only use let if variable needs to change.

 * constant - r(read only)
 * use const whenever possible.

 * Data types
 * - Immutable : primitive types, frozen objects (i.e. object.freeze())
 * - Mutable : all objects by default are mutable in JS

 * favor immutable data type always for a few reasons:
 *  - security
 *  - thread safety
 *  - reduce human mistakes
 */

/**
 ****************************************************************************************************
 * ### Variable types
 ****************************************************************************************************
 * primitive - single item
 *  - number, string, boolean, null, undefined, symbol

 * object
 *  - box container by building single items

 * function
 *  - javascript supports first-class function
 */

// number
const nInteger = 7
const nFloat = 7.1
console.log(`value(nInteger): ${nInteger}, type: ${typeof nInteger}`)
console.log(`value(nFloat): ${nFloat}, type: ${typeof nFloat}`)

// special numeric values in type number
// - infinity, -infinity, NaN
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
let x = undefined
console.log(`value(x): ${x}, type: ${typeof x}`)

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
console.log(text.charAt(0)) // h
console.log(`value(text): ${text}, type: ${typeof text}`)
text = 1
console.log(`value(text): ${text}, type: ${typeof text}`)
text = '7' + 5
console.log(`value(text): ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value(text): ${text}, type: ${typeof text}`)
console.log(text.charAt(0)) // error
