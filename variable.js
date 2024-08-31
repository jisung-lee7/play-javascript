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
 */
console.log(`\n[ Variable ]`)

{
  // let age = 30
  // function showAge() {
  //   console.log(`c.log ## age ##`, age)
  //
  //   // let age = 20 // just reference error
  //   // if 'let' wasn't hoisted, showAge() would have displayed 30.
  // }
  // showAge()
}

/**
 ****************************************************************************************************
 * ### The process of variable creation
 ****************************************************************************************************
 */
console.log(`\n[ The process of variable creation ]`)

/**
 ****************************************************************************************************
 * ### Data types
 ****************************************************************************************************
 */
console.log(`\n[ Data types ]`)

// number
{
  // const nInteger = 7 // integer :number
  // const nFloat = 7.1 // decimal number :number
  //
  // console.log(`value(nInteger): ${nInteger}, type: ${typeof nInteger}`)
  // console.log(`value(nFloat): ${nFloat}, type: ${typeof nFloat}`)
}

// Convert binary
{
  // const num = 10
  //
  // console.log(`c.log ## num.toString() ##`, num.toString())
  // console.log(`c.log ## num.toString(2) ##`, num.toString(2))
}

// Convert to hex
{
  // const num = 255
  //
  // console.log(`c.log ## num.toString() ##`, num.toString())
  // console.log(`c.log ## num.toString(16) ##`, num.toString(16))
}

// Special numeric values in type number
//   - infinity, -infinity, NaN
{
  // const nInfinity = 1 / 0
  // const nNegativeInfinity = -1 / 0
  // const nNaN = 'not a number' / 2
  //
  // console.log(`value(nInfinity): ${nInfinity}, type: ${typeof nInfinity}`)
  // console.log(
  //   `value(nNegativeInfinity): ${nNegativeInfinity}, type: ${typeof nNegativeInfinity}`
  // )
  // console.log(`value(nNaN): ${nNaN}, type: ${typeof nNaN}`)
}

// bigInt (fairly new, don't use it yet)
{
  // const nBigInt = 1234567890123456789012345678901234567890n
  //
  // console.log(`value(nBigInt): ${nBigInt}, type: ${typeof nBigInt}`)
}

// string
{
  // const strJS = 'JavaScript'
  // const strGreeting = 'Hello, ' + strJS
  //
  // console.log(`value(strGreeting): ${strGreeting}, type: ${typeof strGreeting}`)
  //
  // const strJSGreeting = `Hi ${strJS}!` // template(string) literals
  //
  // console.log(
  //   `value(strJSGreeting): ${strJSGreeting}, type: ${typeof strJSGreeting}`
  // )
}

// boolean
// false: 0, null, undefined, Nan, ``
// true: any other value
{
  // const bBoolean = true
  // const bTest = 3 < 1 // false
  //
  // console.log(`value(bBoolean): ${bBoolean}, type: ${typeof bBoolean}`)
  // console.log(`value(bTest): ${bTest}, type: ${typeof bTest}`)
}

// null
{
  // let nothing = null
  // // This is a bug that type is object in the early version of JavaScript. It is not fixed to maintain backward compatibility.
  // console.log(`value(nothing): ${nothing}, type: ${typeof nothing}`) // object
}

// undefined
{
  // let x
  // let y = undefined
  //
  // console.log(`value(x): ${x}, type: ${typeof x}`)
  // console.log(`value(y): ${y}, type: ${typeof y}`)
}
/**
 ****************************************************************************************************
 * ### Symbol
 ****************************************************************************************************
 * create unique identifiers for objects. Do not use 'new'.
 */
console.log(`\n[ Symbol ]`)

{
  // const symbol1 = Symbol()
  // const symbol2 = Symbol()
  //
  // console.log(`c.log ## symbol1 ##`, symbol1)
  // console.log(`c.log ## symbol2 ##`, symbol2)
  // console.log(`c.log ## symbol1 == symbol2 ##`, symbol1 == symbol2)
  // console.log(`c.log ## symbol1 === symbol2 ##`, symbol1 === symbol2)
  //
  // console.log(
  //   `symbol1.description: ${symbol1.description}, type: ${typeof symbol1}`
  // )
  // console.log(
  //   `symbol2.description: ${symbol2.description}, type: ${typeof symbol2}`
  // )
  //
  // const symbol3 = Symbol('id')
  // const symbol4 = Symbol('id')
  //
  // console.log(`c.log ## symbol3 ##`, symbol3)
  // console.log(`c.log ## symbol4 ##`, symbol4)
  // console.log(`c.log ## symbol3 == symbol4 ##`, symbol3 == symbol4)
  // console.log(`c.log ## symbol3 === symbol4 ##`, symbol3 === symbol4)
  //
  // console.log(
  //   `symbol3.description: ${symbol3.description}, type: ${typeof symbol3}`
  // )
  // console.log(
  //   `symbol4.description: ${symbol4.description}, type: ${typeof symbol4}`
  // )
  //
  // const gSymbol1 = Symbol.for('id')
  // const gSymbol2 = Symbol.for('id')
  //
  // console.log(`c.log ## gSymbol1 === gSymbol2 ##`, gSymbol1 === gSymbol2)
  //
  // console.log(`c.log ## Symbol.keyFor(gSymbol1) ##`, Symbol.keyFor(gSymbol1))
  // console.log(`c.log ## Symbol.keyFor(gSymbol2) ##`, Symbol.keyFor(gSymbol2))
}

{
  // // Someone made it
  // const user = {
  //   name: 'Jisung',
  //   age: 30
  // }
  //
  // // I work it
  // // user.showName = function () {
  // //   console.log(`c.log ## this.name ##`, this.name) // user will see something unnecessary
  // // }
  // // user.showName()
  //
  // // I work it(use symbol)
  // const showName = Symbol('show name')
  // user[showName] = function () {
  //   console.log(`c.log ## this.name ##`, this.name) // user can't see this
  // }
  // user[showName]()
  //
  // // When user login see it
  // for (let key in user) {
  //   console.log(`His ${key} is ${user[key]}.`)
  // }
}
/**
 ****************************************************************************************************
 * ### Dynamic typing : dynamically typed language
 ****************************************************************************************************
 */
console.log(`\n[ Dynamic typing : dynamically typed language ]`)

{
  // let text = 'hello'
  //
  // console.log(text.charAt(0)) // h
  // console.log(`value(text): ${text}, type: ${typeof text}`)
  //
  // text = 1
  // console.log(`value(text): ${text}, type: ${typeof text}`)
  //
  // text = '7' + 5
  // console.log(`value(text): ${text}, type: ${typeof text}`)
  //
  // text = '8' / '2'
  // console.log(`value(text): ${text}, type: ${typeof text}`)
  // // console.log(text.charAt(0)) // error - runtime error
}

/**
 ****************************************************************************************************
 * ### Type conversion(Type Casting)
 ****************************************************************************************************
 */
console.log(`\n[ Type conversion ]`)

// Implicit type conversion - automatic type conversion by the JavaScript engine.
{
  // const str1 = '6'
  // const str2 = '2'
  //
  // console.log(`c.log ## str1 / str2 ##`, str1 / str2) // implicit type conversion
  // console.log(`c.log ## str1 + str2 ##`, str1 + str2) // but it is not, so implicit type conversions can occur unexpectedly, caution is advised.
}

{
  // // Explicit type conversion - manual type conversion using internal function by programmer
  // // String()
  // console.log(
  //   String(7),
  //   String(true),
  //   String(false),
  //   String(null),
  //   String(undefined)
  // )
  //
  // // Number()
  // console.log(
  //   Number('1234'),
  //   Number('123aaa'),
  //   Number('aaa1234'),
  //   Number(true),
  //   Number(false)
  // )
  //
  // // Boolean()
  // console.log(
  //   Boolean(0),
  //   Boolean(''),
  //   Boolean(null),
  //   Boolean(undefined),
  //   Boolean(NaN)
  // )
  //
  // // Note
  // console.log(
  //   Number(null), // 0
  //   Number(undefined), // Nan
  //   Boolean(0), // false
  //   Boolean('0'), // true
  //   Boolean(''), // false
  //   Boolean(' ') // true
  // )
}

/**
 ****************************************************************************************************
 * ### Math methods
 ****************************************************************************************************
 */
console.log(`\n[ Math ]`)

// Math.PI
{
  // console.log(`c.log ## Math.PI ##`, Math.PI)
}

// Math.ceil()
{
  // const num1 = 5.1
  // const num2 = 5.7
  //
  // console.log(`c.log ## Math.ceil(num1) ##`, Math.ceil(num1))
  // console.log(`c.log ## Math.ceil(num2) ##`, Math.ceil(num2))
}

// Math.floor()
{
  // const num1 = 5.1
  // const num2 = 5.7
  //
  // console.log(`c.log ## Math.floor(num1) ##`, Math.floor(num1))
  // console.log(`c.log ## Math.floor(num2) ##`, Math.floor(num2))
}

// Math.round()
{
  // const num1 = 5.1
  // const num2 = 5.7
  //
  // console.log(`c.log ## Math.round(num1) ##`, Math.round(num1))
  // console.log(`c.log ## Math.round(num2) ##`, Math.round(num2))
}

// Display up to two decimal places
// use Math.round()
{
  // const useRound = 30.1234
  //
  // console.log(
  //   `c.log ## (useRound * 100) / 100 ##`,
  //   Math.round(useRound * 100) / 100
  // )
}

// Math.toFixed()
{
  // const useToFixed = 30.1234
  //
  // console.log(`c.log ## useToFixed.toFixed(2) ##`, useToFixed.toFixed(2))
  // console.log(`c.log ## useToFixed.toFixed(0) ##`, useToFixed.toFixed(0))
  // console.log(`c.log ## useToFixed.toFixed(6) ##`, useToFixed.toFixed(6))
  //
  // // NOTE: return to string
  // console.log(
  //   `c.log ## Number(useToFixed.toFixed(2)) ##`,
  //   Number(useToFixed.toFixed(2))
  // )
}

// isNaN()
{
  // const x = Number('x')
  //
  // console.log(`c.log ## isNaN(x) ##`, isNaN(x)) // true
  // console.log(`c.log ## isNaN(3) ##`, isNaN(3)) // false
  //
  // // NOTE
  // console.log(`c.log ## x == NaN ##`, x == NaN) // false
  // console.log(`c.log ## x === NaN ##`, x === NaN) // false
  // console.log(`c.log ## NaN == NaN ##`, NaN == NaN) // false
}

// parseInt()
{
  // const margin = '10px'
  //
  // console.log(`c.log ## parseInt(margin) ##`, parseInt(margin)) // 10
  // console.log(`c.log ## Number(margin) ##`, Number(margin)) // NaN
  //
  // const redColor = 'f3'
  //
  // console.log(`c.log ## parseInt(redColor) ##`, parseInt(redColor)) // NaN
  // console.log(`c.log ## parseInt(redColor, 16) ##`, parseInt(redColor, 16)) // 243
  //
  // console.log(`c.log ## parseInt('11', 16) ##`, parseInt('11', 2)) // 3
}

// parseFloat()
{
  // const padding = '18.5%'
  //
  // console.log(`c.log ## parseInt(padding) ##`, parseInt(padding)) // 18
  // console.log(`c.log ## parseFloat(padding) ##`, parseFloat(padding)) // 18.5
}

// Math.random()
// A random number between 0 and 1
{
  // console.log(`c.log ## Math.random() ##`, Math.random())
  // console.log(`c.log ## Math.random() ##`, Math.random())
  // console.log(`c.log ## Math.random() ##`, Math.random())
  // console.log(`c.log ## Math.random() ##`, Math.random())
  // console.log(`c.log ## Math.random() ##`, Math.random())
}

// Math.max()
{
  // console.log(
  //   `c.log ## Math.max(1, 4, -1, 5, 10, 9, 5.54) ##`,
  //   Math.max(1, 4, -1, 5, 10, 9, 5.54)
  // )
}

// Math.min()
{
  // console.log(
  //   `c.log ## Math.min(1, 4, -1, 5, 10, 9, 5.54) ##`,
  //   Math.min(1, 4, -1, 5, 10, 9, 5.54)
  // )
}

// Math.abs()
{
  // console.log(`c.log ## Math.abs(-1) ##`, Math.abs(-1))
}

// Math.pow(n, m) - n^m
{
  // console.log(`c.log ## Math.pow(2, 10) ##`, Math.pow(2, 10))
}

// Math.sqrt()
{
  // console.log(`c.log ## Math.sqrt(16) ##`, Math.sqrt(16))
}

/**
 ****************************************************************************************************
 * ### String methods
 ****************************************************************************************************
 */
console.log(`\n[ String methods ]`)

{
  // const desc = 'Hello'
  //
  // console.log(`c.log ## desc.length ##`, desc.length)
  // console.log(`c.log ## desc[1] ##`, desc[1])
  //
  // console.log(`c.log ## desc.toUpperCase() ##`, desc.toUpperCase())
  // console.log(`c.log ## desc.toLowerCase() ##`, desc.toLowerCase())
}

// str.indexOf
{
  // const desc = 'Hi guys, Nice to meet you.'
  //
  // console.log(`c.log ## desc.indexOf('to') ##`, desc.indexOf('to'))
  // console.log(`c.log ## desc.indexOf('man') ##`, desc.indexOf('man'))
  //
  // if (desc.indexOf('Hi') > -1) {
  //   console.log(`This sentence contains Hi`)
  // }
}

// str.slice
{
  // const desc = 'abcdefg'
  //
  // console.log(`c.log ## desc.slice(2) ##`, desc.slice(2)) // 'cdefg'
  // console.log(`c.log ## desc.slice(0, 5) ##`, desc.slice(0, 5)) // abcde
  // console.log(`c.log ## desc.slice(2, -2) ##`, desc.slice(2, -2)) // cde
}

// str.substring(n, m)
{
  // const desc = 'abcdefg'
  //
  // console.log(`c.log ## desc.substring(2, 5) ##`, desc.substring(2, 5)) // 'cde'
  // console.log(`c.log ## desc.substring(5, 2) ##`, desc.substring(5, 2)) // 'cde'
}

// str.substr(n, m)
{
  // const desc = 'abcdefg'
  //
  // console.log(`c.log ## desc.substr(2, 4) ##`, desc.substr(2, 4)) // 'cdef'
  // console.log(`c.log ## desc.substr(-4, 2) ##`, desc.substr(-4, 2)) // 'de'
}

// str.trim()
{
  // const desc = ' coding       '
  // console.log(`c.log ## desc ##`, desc)
  // console.log(`c.log ## desc.trim() ##`, desc.trim())
}

// str.repeat(n)
{
  // const hello = 'hello!'
  // console.log(`c.log ## hello.repeat(3) ##`, hello.repeat(3))
}

// compare
{
  // console.log(`c.log ## 1 < 3 ##`, 1 < 3)
  // console.log(`c.log ## 'a' < 'c' ##`, 'a' < 'c')
}

{
  // console.log(`c.log ## 'a'.codePointAt(0) ##`, 'a'.codePointAt(0))
  // console.log(`c.log ## String.fromCodePoint(97) ##`, String.fromCodePoint(97))
}
