'use strict'
/**
 ****************************************************************************************************
 * ### Assignment operator
 ****************************************************************************************************
 */
console.log(`\n[ Assignment operator ]`)

{
  // let x = 1
  // let y = 2
  //
  // console.log(`c.log ## x ##`, x)
  // console.log(`c.log ## y ##`, y)
}

/**
 ****************************************************************************************************
 * ### Numeric operators
 ****************************************************************************************************
 */
console.log(`\n[ Numeric operators ]`)

{
  // console.log(1 + 1) // add
  // console.log(1 - 1) // subtract
  // console.log(1 / 1) // divide
  // console.log(1 * 1) // multiply
  // console.log(1 % 1) // remainder
  // console.log(1 ** 1) // exponentiation, power
}

/**
 ****************************************************************************************************
 * ### String concatenation
 ****************************************************************************************************
 */
console.log(`\n[ String concatenation ]`)

{
  // console.log(`hello` + ` javascript`)
  // console.log(`1` + 2)
  // console.log(`string literals: 1 + 2 = ${1 + 2}`)
}

/**
 ****************************************************************************************************
 * ### Compound assignment operators
 ****************************************************************************************************
 */
console.log(`\n[ Compound assignment operators ]`)

{
  // let x = 3
  // let y = 6
  // console.log(`c.log ## x = ${x}, y = ${y}`)
  // console.log(`c.log ## x += y ##`, (x += y)) // x = x + y;
  //
  // console.log(`\nc.log ## x = ${x}, y = ${y}`)
  // console.log(`c.log ## x -= y ##`, (x -= y))
  //
  // console.log(`\nc.log ## x = ${x}, y = ${y}`)
  // console.log(`c.log ## x *= y ##`, (x *= y))
  //
  // console.log(`\nc.log ## x = ${x}, y = ${y}`)
  // console.log(`c.log ## x /= y ##`, (x /= y))
}

/**
 ****************************************************************************************************
 * ### Increment and decrement operators
 ****************************************************************************************************
 */
console.log(`\n[ Increment and decrement operators ]`)

{
  // let counter = 7
  // const preIncrement = ++counter // counter = counter + 1;, preIncrement = counter;
  // console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
  //
  // const postIncrement = counter++ // postIncrement = counter;, counter = counter + 1;
  // console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
}

/**
 ****************************************************************************************************
 * ### Logical operators: || (or), && (and), ! (not)
 ****************************************************************************************************
 * || (or)
 * - leftExpr || rightExpr
 *    - if leftExpr === falsy, it returns rightExpr - using Nullish coalescing operator is better because of falsy
 *    - if leftExpr === truthy and rightExpr === truthy, it returns leftExpr
 *    - that means finds the first truthy value
 *
 * && (and)
 * - leftExpr && rightExpr
 *    - if leftExpr === truthy, it returns rightExpr
 *    - if leftExpr === truthy and rightExpr === truthy, it returns rightExpr
 *    - that means finds the first falsy value
 *
 * falsy : false, '', "", ``, 0, -0, null, undefined, NaN
 */
console.log(`\n[ Logical operators: || (or), && (and), ! (not) ]`)

{
  // const value1 = true
  // const value2 = 7 < 2
  //
  // console.log(`c.log ## value1    || value2   ##`, value1 || value2)
}

{
  // const name = 'Jisung'
  // const userName = 'Guest'
  // console.log(`c.log ## name      || userName ##`, name || userName)
}

{
  // const nullName = null
  // const userName = 'Guest'
  // console.log(`c.log ## nullName  || userName ##`, nullName || userName)
}

{
  // const emptyName = ''
  // const userName = 'Guest'
  // console.log(`c.log ## emptyName || userName ##`, emptyName || userName)
}

{
  // const num = 0
  // const userName = 'undefined'
  // console.log(`c.log ## num       || userName ##`, num || userName)
}

{
  // const value1 = true
  // const value2 = 7 < 2
  //
  // console.log(`c.log ## value1    && value2   ##`, value1 && value2)
}

{
  // // ! (not)
  // console.log(`c.log ## !true                 ##`, !true)
}

/**
 ****************************************************************************************************
 * ### Comparison operators
 ****************************************************************************************************
 */
console.log(`\n[ Comparison operators ]`)

{
  // console.log(`c.log ## 10 <  7 ##`, 10 < 7) // less than
  // console.log(`c.log ## 10 <= 7 ##`, 10 <= 7) // less than or equal
  // console.log(`c.log ## 10 >  7 ##`, 10 > 7) // greater than
  // console.log(`c.log ## 10 >= 7 ##`, 10 >= 7) // greater than or equal
}

/**
 ****************************************************************************************************
 * ### Equality
 ****************************************************************************************************
 * ==  : loose equality
 * === : strict equality
 */
console.log(`\n[ Equality ]`)

{
  // const strFive = '5'
  // const nFive = 5
  //
  // // Loose equality(==), with type conversion
  // console.log(`c.log ## strFive ==  nFive ##`, strFive == nFive)
  // console.log(`c.log ## strFive !=  nFive ##`, strFive != nFive)
  //
  // // Strict equality(===), no type conversion
  // console.log(`c.log ## strFive === nFive ##`, strFive === nFive)
  // console.log(`c.log ## strFive !== nFive ##`, strFive !== nFive)
  //
  // console.log(`\n`)
  //
  // // Object equality by reference
  // const obj1 = { name: 'jisung' }
  // const obj2 = { name: 'jisung' }
  // const obj3 = obj1
  //
  // console.log(`c.log ## obj1 ==  obj2      ##`, obj1 == obj2)
  // console.log(`c.log ## obj1 === obj2      ##`, obj1 === obj2)
  // console.log(`c.log ## obj1 === obj3      ##`, obj1 === obj3)
  //
  // // Equality example
  // console.log(`c.log ##   0  ==  false     ##`, 0 == false)
  // console.log(`c.log ##   0  === false     ##`, 0 === false)
  // console.log(`c.log ##  ''  ==  false     ## ${'' == false}`) // true
  // console.log(`c.log ##  ''  === false     ## ${'' === false}`) // false
  // console.log(`c.log ## null ==  undefined ##`, null == undefined)
  // console.log(`c.log ## null === undefined ##`, null === undefined)
}

/**
 ****************************************************************************************************
 * ### Nullish coalescing operator - new(ES11)
 ****************************************************************************************************
 * leftExpr ?? rightExpr
 * When leftExpr === null or undefined, it returns rightExpr
 * When leftExpr !== null or undefined, it returns leftExpr
 * When leftExpr and rightExpr !== null or undefined, it returns leftExpr
 */
console.log(`\n[ Nullish coalescing operator ]`)

// Nullish coalescing operator
{
  // const nullName = null
  // const userName = 'Guest'
  //
  // console.log(`c.log ## nullName      ?? userName ##`, nullName ?? userName)
}

{
  // const undefinedName = undefined
  // const userName = 'Guest'
  //
  // console.log(
  //   `c.log ## undefinedName ?? userName ##`,
  //   undefinedName ?? userName
  // )
}

{
  // const emptyName = ''
  // const userName = 'Guest'
  //
  // console.log(`c.log ## emptyName     ?? userName ##`, emptyName ?? userName)
}

{
  // const stringUndefinedName = 'undefined'
  // const num = 0
  // console.log(
  //   `c.log ## stringUndefinedName ?? num ##`,
  //   stringUndefinedName ?? num
  // )
}

/**
 ****************************************************************************************************
 * ### Typeof operator
 ****************************************************************************************************
 * It returns value of type to string
 */
console.log(`\n[ Typeof operator ]`)

{
  // let justVar = 7
  // justVar = 'hello'
  //
  // let varType = typeof justVar
  // console.log(`c.log ## varType ##`, varType)
}

/**
 ****************************************************************************************************
 * ### Ternary operator: ?
 ****************************************************************************************************
 * condition ? value1 : value2
 */
console.log(`\n[ Ternary operator ]`)

{
  // const isCat = true
  // const component = isCat ? 'cat' : 'dog'
  // console.log(`c.log ## component ##`, component)
}

/**
 ****************************************************************************************************
 * ### Conditional operators: if
 ****************************************************************************************************
 * if, else if, else
 */
console.log(`\n[ Conditional operators: if ]`)

const testName = 'testIf'

{
  // if (testName === 'testIf') {
  //   console.log(`testName = testIf`)
  // } else if (testName === 'testElseIf') {
  //   console.log(`testName = testElseIf`)
  // } else {
  //   console.log(`unknown`)
  // }
}

/**
 ****************************************************************************************************
 * ### Switch statement
 ****************************************************************************************************
 * Use for multiple if checks
 * Use for enum-like value check
 * Use for multiple type checks in TS
 */
console.log(`\n[ Switch statement ]`)

{
  // const alpha = 'A'
  // switch (alpha) {
  //   case 'A':
  //     console.log(`alpha case A`)
  //     break
  //   case 'B':
  //   case 'C':
  //     console.log(`alpha case B, C`)
  //     break
  //   default:
  //     console.log(`alpha default`)
  //     break
  // }
}

/**
 ****************************************************************************************************
 * ### Loop, iteration
 ****************************************************************************************************
 */
// while loop, while the condition is truthy,
// Body code is executed.
console.log(`\n[ Loops ]`)

{
  // let i = 3
  // while (i > 0) {
  //   console.log(`while: ${i}`)
  //   i--
  // }
}

{
  // let i = 3
  // // do while loop, body code is executed first,
  // // then check the condition.
  // do {
  //   console.log(`do while: ${i}`)
  //   i--
  // } while (i > 0)
}

{
  // let i
  // // for loop, for(begin; condition; step){}
  // for (i = 3; i > 0; i--) {
  //   console.log(`for: ${i}`)
  // }
}

{
  // for (let i = 3; i > 0; i = i - 2) {
  //   // Inline variable declaration
  //   console.log(`inline variable for: ${i}`)
  // }
}

{
  // // Nested loops - O(n^2)
  // for (let i = 0; i < 10; i++) {
  //   for (let j = 0; j < 10; j++) {
  //     console.log(`i: ${i}, j:${j}`)
  //   }
  // }
}

{
  // // break
  // while (true) {
  //   let answer = confirm('Do you want to continue?')
  //   if (!answer) {
  //     break
  //   }
  // }
}

{
  // // continue
  // for (let i = 0; i < 10; i++) {
  //   if (i % 2 !== 0) {
  //     continue
  //   }
  //   console.log(`c.log ## i ##`, i)
  // }
}
