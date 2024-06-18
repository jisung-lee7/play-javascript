'use strict'
/**
 ****************************************************************************************************
 * ### String concatenation
 ****************************************************************************************************
 */
console.log('hello' + ' javascript')
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1 + 2}`)

/**
 ****************************************************************************************************
 * ### Numeric operators
 ****************************************************************************************************
 */
console.log(1 + 1) // add
console.log(1 - 1) // subtract
console.log(1 / 1) // divide
console.log(1 * 1) // multiply
console.log(1 % 1) // remainder
console.log(1 ** 1) // exponentiation

/**
 ****************************************************************************************************
 * ### Increment and decrement operators
 ****************************************************************************************************
 */
let counter = 7
const preIncrement = ++counter
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postIncrement = counter++
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)

/**
 ****************************************************************************************************
 * ### Assignment operators
 ****************************************************************************************************
 */
let x = 3
let y = 6
x += y // x = x + y;
x -= y
x *= y
x /= y

/**
 ****************************************************************************************************
 * ### Comparison operators
 ****************************************************************************************************
 */
console.log(`10 <  7 -> ${10 < 6}`) // less than
console.log(`10 <= 7 -> ${10 <= 6}`) // less than or equal
console.log(`10 >  7 -> ${10 > 6}`) // greater than
console.log(`10 >= 7 -> ${10 >= 6}`) // greater than or equal

/**
 ****************************************************************************************************
 * ### Logical operators: || (or), && (and), ! (not)
 ****************************************************************************************************
 * Often used to compress long if-statement
 * NullableObject && nullableObject.something
 */
const value1 = true
const value2 = 7 < 2
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('wasting time')
  }
  return true
}

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// ! (not)
console.log(`not (!true): ${!true}`)

/**
 ****************************************************************************************************
 * ### Equality
 ****************************************************************************************************
 * ==  : loose equality
 * === : strict equality
 */
const strFive = '5'
const nFive = 5

// Loose equality(==), with type conversion
console.log(`strFive == nFive -> ${strFive == nFive}`)
console.log(`strFive != nFive -> ${strFive != nFive}`)

// Strict equality(===), no type conversion
console.log(`strFive === nFive -> ${strFive === nFive}`)
console.log(`strFive !== nFive -> ${strFive !== nFive}`)

// Object equality by reference
const obj1 = { name: 'jisung' }
const obj2 = { name: 'jisung' }
const obj3 = obj1

console.log(`obj1 ==  obj2 -> ${obj1 == obj2}`)
console.log(`obj1 === obj2 -> ${obj1 === obj2}`)
console.log(`obj1 === obj2 -> ${obj1 === obj3}`)

// Equality example
console.log(`  0  ==    false   -> ${0 == false}`) // true
console.log(`  0  ===   false   -> ${0 === false}`) // false
console.log(` ''  ==    false   -> ${'' == false}`) // true
console.log(` ''  ===   false   -> ${'' === false}`) // false
console.log(`null ==  undefined -> ${null == undefined}`) // true
console.log(`null === undefined -> ${null === undefined}`) // false

/**
 ****************************************************************************************************
 * ### Power
 ****************************************************************************************************
 */
{
  const nPow = 2 ** 3
  console.log('c.log ## nPow ##', nPow)
}

/**
 ****************************************************************************************************
 * ### Conditional operators: if
 ****************************************************************************************************
 * if, else if, else
 */
const testName = 'testIf'
if (testName === 'testIf') {
  console.log('testName = testIf')
} else if (testName === 'testElseIf') {
  console.log('testName = testElseIf')
} else {
  console.log('unknown')
}

/**
 ****************************************************************************************************
 * ### Ternary operator: ?
 ****************************************************************************************************
 * condition ? value1 : value2
 */
console.log(testName === 'testIf' ? 'TRUE_VALUE' : 'FALSE_VALUE')

/**
 ****************************************************************************************************
 * ### Switch statement
 ****************************************************************************************************
 * Use for multiple if checks
 * Use for enum-like value check
 * Use for multiple type checks in TS
 */
const alpha = 'A'
switch (alpha) {
  case 'A':
    console.log('alpha case A')
    break
  case 'B':
  case 'C':
    console.log('alpha case B, C')
    break
  default:
    console.log('alpha default')
    break
}

/**
 ****************************************************************************************************
 * ### Loops
 ****************************************************************************************************
 */
// while loop, while the condition is truthy,
// Body code is executed.
let i = 3
while (i > 0) {
  console.log(`while: ${i}`)
  i--
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`)
  i--
} while (i > 0)

// for loop, for(begin; condition; step){}
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
  // Inline variable declaration
  console.log(`inline variable for: ${i}`)
}

// Nested loops - O(n^2)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`)
  }
}

// break
while (true) {
  let answer = confirm('Do you want to continue?')
  if (!answer) {
    break
  }
}

// continue
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue
  }
  console.log('c.log ## i ##', i)
}
