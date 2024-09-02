# play-javascript

My personal playground for javascript coding and learning.

## :pushpin: Summary
## :label: Variable
- A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.
<br><br>
- 'var' - don't ever use this
   - 'var' has no block scope, it has function-scope
<br><br>
- Hoisting
   - move declaration from bottom to top anywhere within the scope(Only declaration, NOT assignments)
   - 'let' and 'constant' are also hoisted, but they cause an error because TDZ(Temporal Dead Zone)
   - It just can't be used before assignments.
<br><br>

### The process of variable creation
- var(function-scoped)
   1. Declaration and initialization(=assigning 'undefined')
   2. Assignment
<br><br>
- let(block-scoped)
   1. Declaration(hoisted)
   2. Initialization(when the code is reached)
   3. Assignment
<br><br>
- constant(block-scoped)
   1. Declaration
   2. Initialization
   3. Assignment
<br><br>

### Data types
- Immutable(Single item)
   - primitive types(number, string, boolean, null, undefined, symbol), frozen objects (e.g., object.freeze())
<br><br>
- Mutable(Box container by building single items)
   - all objects(Object, Array, Function, RegexExp) by default are mutable in JS
<br><br>
- number
   - integer, decimal number
   - special numeric values(infinity, -infinity, NaN)
<br><br>
- string
   - In any computer programming language, a string is a sequence of characters used to represent text.
<br><br>
- boolean
   - false: 0, null, undefined, Nan, ''
   - true: any other value
<br><br>
- null
   - If you can check null using typeof, it returns object.
   - This is a bug that type is object in the early version of JavaScript. It is not fixed to maintain backward compatibility.
```js
console.log(typeof null) // it will returns object
```
<br>

- undefined
   - Automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.
<br><br>
- symbol
   - create unique identifiers for objects.
   - Do not use 'new'.
<br><br>

#### (added in ES6)
- 'let' - rw(read/write)  
   - Only use 'let' if variable needs to change.
<br><br>
- 'constant' - r(read only)
   - Use const whenever possible.
<br><br>
- Favor immutable data type always for a few reasons:
   - Security
   - Thread safety
   - Reduce human mistakes
<br><br>

### Type conversion(Type Casting)
- Implicit type conversion
   - Automatic type conversion by the JavaScript engine.
<br><br>
- Explicit type conversion
   - manual type conversion using internal function by programmer
<br><br>

## :label: Operator
### Assignment operator
- The assignment (=) operator is used to assign a value to a variable or property.
```js
let x = 1
```
<br>

### Numeric operators
```js
console.log(1 + 1)  // add
console.log(1 - 1)  // subtract
console.log(1 / 1)  // divide
console.log(1 * 1)  // multiply
console.log(1 % 1)  // remainder
console.log(1 ** 1) // exponentiation, power
```
<br>

### Compound assignment operators
```js
+=, -=, *=, /=
```
<br>

### Increment and decrement operators
```js
++, --
```
<br>

### Logical operators: || (or), && (and), ! (not)
#### || (or)
- leftExpr || rightExpr
   - if leftExpr === falsy, it returns rightExpr - using Nullish coalescing operator is better because of falsy
   - if leftExpr === truthy and rightExpr === truthy, it returns leftExpr
- that means finds the first truthy value
<br><br>

#### && (and)
- leftExpr && rightExpr
   - if leftExpr === truthy, it returns rightExpr
   - if leftExpr === truthy and rightExpr === truthy, it returns rightExpr
- that means finds the first falsy value
<br><br>
- We can also use it for short-circuit evaluation.
<br><br>

### Nullish coalescing operator - new(ES11)
- leftExpr ?? rightExpr
   - When leftExpr === null or undefined, it returns rightExpr
   - When leftExpr !== null or undefined, it returns leftExpr
   - When leftExpr and rightExpr !== null or undefined, it returns leftExpr
<br><br>

### Ternary operator: ?
- condition ? value1 : value2
```js
const isCat = true
const component = isCat ? 'cat' : 'dog'

console.log(component)
```
<br>

### Comparison operators
```js
console.log('10 <  7', 10 <  7) // less than
console.log('10 <= 7', 10 <= 7) // less than or equal
console.log('10 >  7', 10 >  7) // greater than
console.log('10 >= 7', 10 >= 7) // greater than or equal
```
<br>

### Equality
```js
==  // loose equality
=== // strict equality
```
<br>

## :label: Function
- Javascript supports first-class function
<br><br>
- First-class function
   - Functions are treated like any other variable
   - Can be assigned as a value to variable
   - Can be passed as an argument to other functions
   - Can be returned by another function
<br><br>

### Parameters
- Primitive parameters : passed by value
- Object parameters    : passed by reference
<br><br>

### Function(Function Declaration)
- Fundamental building block in the program
- Subprogram can be used multiple times
- Performs a task or calculates a value
- Function declarations can be called from anywhere. The reason is due to hoisting
<br><br>
- Function declaration
  - function name(param1, param2) { body... return; }
  - one function === one thing
    e.g., createCardAndPoint -> createCard, createPoint
  - function is object in JS
<br><br>

### Function expression
- Anonymous function, Arrow function
- What is diff Function declaration vs Function expression ?
- A function declaration can be called earlier than it is defined. (hoisted)
- A function expression is created when the execution reaches it
<br><br>

### Callback function
- A callback function is a function passed into another function as an argument, 
  which is then invoked inside the outer function to complete some kind of routine or action

1. Declare function to be used
```js
function printImmediately(callback) {
  callback()
}
```
<br>

2. Pass to callback function
```js
function callbackTest() {
  console.log('hello')
}
printImmediately(callbackTest)
```
<br>

3. remove name of function(modify callbackTest to anonymous)
```js
printImmediately(function () {
  console.log('hello')
})
```
<br>

4. modify anonymous to arrow
```js
printImmediately(() => console.log('hello'))
```
<br>

- How to use it?
```js
function doRepeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback(i)
  }
}

doRepeat(3, (i) => { // it returns 0, 1, 2
  console.log(i)
})

doRepeat(3, (i) => { // it returns 0, 2, 4
  console.log(i * 2)
})
```
<br>

## :label: Scope
- The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
- If a variable or expression is not in the current scope, it will not be available for use. 
- Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
- JavaScript has the following kinds of scopes:
   - Global scope: The default scope for all code running in script mode.
   - Module scope: The scope for code running in module mode.
   - Function scope: The scope created with a function.
<br><br>
- In addition, identifiers declared with certain syntaxes, including let, const, class, or (in strict mode) function, can belong to an additional scope:
   - Block scope: The scope created with a pair of curly braces (a block).
<br><br>

## :label: Object
- One of the JavaScript's data types.
- A collection of related data and/or functionality.
- Nearly all objects in JavaScript are instances of Object
```js
obj = { key: value }
```
<br>

- How to declare object?
```js
const objectLiteral = {} // 'object literal' syntax
const objectConstructor = new Object() // 'object constructor' syntax
```
<br>

### Object property
- A JavaScript property is a member of an object that associates a key with a value. 
```js
const obj = {
  a: 1,
  b() {}
}
```
<br>

- JavaScript, as a dynamically typed language, allows you to add properties later and also delete it later.
```js
const objTest = { name: 'jisung', age: 20 }

objTest.hasJob = true
console.log(objTest.hasJob) // it returns will jisung

delete objTest.hasJob
console.log(objTest.hasJob) // it returns will undefined
```
<br>

### Computed property
```js
const objTest = { name: 'jisung', age: 20 }

console.log(objTest.name) // it returns will jisung
console.log(objTest['name']) // it returns will jisung
console.log(objTest['age']) // it returns will 20

objTest['hasJob'] = true
console.log(objTest.hasJob) // it returns will true

function printValue(objParam, keyParam) {
  console.log(objParam) // it returns will objTest
  console.log(objParam.keyParam) // it returns will undefined, the reason is objParam doesn't have literally key: keyParam
  console.log(objParam[keyParam]) // it returns will 'jisung', it is computed properties
  }

printValue(objTest, 'name')
```
<br>

### In operator: property existence check (key in obj)
```js
const obj = { name: 'jisung', age: 20 }

console.log('name' in obj)   // it returns true
console.log('random' in obj) // it returns false
```
<br>

## :label: Array
- An array is an ordered collection of data (either primitive or object depending upon the language). 
- Arrays are used to store multiple values under a single variable name. 
- A regular variable, on the other hand, can store only one value.
- Each item in an array has a number attached to it, called a numeric index, that allows you to access it. 
- In JavaScript, arrays start at index zero and can be manipulated with various methods.
- How to declare array?
```js
const arr1 = [1, 2] // 'array literal' syntax
const arr2 = new Array() // 'array constructor' syntax
const arr3 = [ 
  // An array can include string, number, object, function
  'Jisung',
  7,
  true,
  {
    name: 'Lee',
    age: '30'
  },
  function () {
    console.log(`TEST`)
  }
]
```
<br>

## :label: Truthy and Falsy
### Truthy
- In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
- All values are truthy unless they are defined as falsy. 
<br><br>

### Falsy
- A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
```js
if (null || undefined || false || NaN || 0 || -0 || 0n || '') {
  console.log('Falsy')
}
```
<br>

### When should we use it?
```js
function testFunc(obj) {
  // if (obj === undefined || obj === null) {
  if (!obj) { // falsy
    console.log('There is no obejct')
    return
  }
  console.log(person.name)
}

const person = null
testFunc(person)
```
<br>


