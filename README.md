# play-javascript

My personal playground for javascript coding and learning.

## :pushpin: Summary
### Table of contents
- [Variable](#label-variable)
- [Operator](#label-operator)
- [Function](#label-function)
- [Scope](#label-scope)
- [Object](#label-object)
- [Array](#label-array)
- [Truthy and falsy](#label-truthy-and-falsy)
- [Destructuring assignment](#label-destructuring-assignment)
- [Spread syntax and Rest argument](#label-spread-syntax-and-rest-argument)
- [Shallow copy and Deep copy](#label-shallow-copy-and-deep-copy)
- [Synchronous and Asynchronous](#label-synchronous-and-asynchronous)

## :label: Variable
- A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.
<br><br>
- 'var' - don't ever use this
   - 'var' has no block scope, it has function-scope
      ```javascript
      function test() {
          if (true) {
              var x = 10 
          }
          console.log(x) // Expected output: 10
      }
      
      test()
      ```
<br>

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

### Hoisting
- Move declaration from bottom to top anywhere within the scope(Only declaration, NOT assignments)
- 'let' and 'const' are also hoisted, but accessing them before initialization will cause a ReferenceError due to the TDZ (Temporal Dead Zone).
- They cannot be accessed before initialization.
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
   1. Declaration and Initialization and Assignment.
<br><br>

### Data types
- Immutable(Single item)
   - primitive types(number, string, boolean, null, undefined, symbol)
   - The memory value cannot be modified.
<br><br>
   - number
      - integer, decimal number
      - special numeric values(infinity, -infinity, NaN)
<br><br>
   - string
      - In any computer programming language, a string is a sequence of characters used to represent text.
<br><br>
   - boolean
      - false: 0, null, undefined, NaN, ''
      - true: any other value
<br><br>
   - null
      - If you can check null using typeof, it returns object.
      - This is a bug that type is object in the early version of JavaScript. It is not fixed to maintain backward compatibility.
         ```javascript
         console.log(typeof null) // expected output: object
         ```
      <br>
   - undefined
      - Automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.
<br><br>
   - symbol
      - create unique identifiers for objects.
      - Do not use 'new'.
<br><br>
- Mutable(Box container by building single items)
   - all objects(Object, Array, Function, RegexExp) by default are mutable in JS
   - The memory value can be modified.
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
```javascript
let x = 1
```
<br>

### Numeric operators
```javascript
console.log(1 + 1)  // add
console.log(1 - 1)  // subtract
console.log(1 / 1)  // divide
console.log(1 * 1)  // multiply
console.log(1 % 1)  // remainder
console.log(1 ** 1) // exponentiation, power
```
<br>

### Compound assignment operators
```javascript
+=, -=, *=, /=
```
<br>

### Increment and decrement operators
```javascript
++, --
```
<br>

### Logical operators: || (or), && (and), ! (not)
#### || (or)
- leftExpr || rightExpr
   - That means finds the first truthy value
<br><br>

#### && (and)
- leftExpr && rightExpr
   - That means finds the first falsy value
<br><br>

### Optional chaining - new(ES11)
- The optional chaining (?.) operator accesses an object's property or calls a function.
- If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
```javascript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName); // Expected output: undefined

console.log(adventurer.someNonExistentMethod?.()); // Expected output: undefined

```
<br>

### Nullish coalescing operator - new(ES11)
- leftExpr ?? rightExpr
   - When leftExpr === null or undefined, it returns rightExpr
   - When leftExpr !== null or undefined, it returns leftExpr
   - When leftExpr and rightExpr !== null or undefined, it returns leftExpr
<br><br>

#### Short-circuit evaluation
- We can use logical operators for short-circuit evaluation.
   - As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:
      - truthy || anything is short-circuit evaluated to the truthy value.
      - falsy && anything is short-circuit evaluated to the falsy value.
      - nonNullish ?? anything is short-circuit evaluated to the non-nullish value.
<br><br>

### Ternary operator: ?
- condition ? value1 : value2
```javascript
const isCat = true
const component = isCat ? 'cat' : 'dog'

console.log(component)
```
<br>

### Comparison operators
```javascript
console.log('10 <  7', 10 <  7) // less than
console.log('10 <= 7', 10 <= 7) // less than or equal
console.log('10 >  7', 10 >  7) // greater than
console.log('10 >= 7', 10 >= 7) // greater than or equal
```
<br>

### Equality
```javascript
==  // loose equality, does not check type
=== // strict equality, checks type
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

### Function
- Fundamental building block in the program
- Subprogram can be used multiple times
- Performs a task or calculates a value
<br><br>

#### Function Declaration
- Function declarations can be called from anywhere. The reason is due to hoisting
- Function declaration
  - function name(param1, param2) { body... return; }
  - one function === one thing
    e.g., createCardAndPoint -> createCard, createPoint
  - function is object in JS
<br><br>

#### Function expression
- Anonymous function, Arrow function
<br><br>

##### What is diff Function declaration vs Function expression ?
- A function declaration can be called earlier than it is defined. (hoisted)
- A function expression is created when the execution reaches it.
<br><br>

## :label: Scope
- The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
- If a variable or expression is not in the current scope, it will not be available for use. 
- Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
- JavaScript has the following kinds of scopes:
   - Global scope
      - The default scope for all code running in script mode. 
      - Variables and functions declared in the global scope are accessible throughout the entire script.
   - Module scope
      - The scope for code running in module mode (ES6 modules). 
      - Variables and functions declared in a module are only accessible within that module unless explicitly exported.
   - Function scope
      - The scope created with a function. 
      - Variables declared within a function are accessible only within that function.
<br><br>
- In addition, identifiers declared with certain syntaxes, including let, const, class, or (in strict mode) function, can belong to an additional scope:
   - Block scope
      - The scope created with a pair of curly braces (`{}`). 
      - Variables declared with `let` and `const` are limited to the block in which they are defined.
<br><br>

## :label: Object
- One of the JavaScript's data types.
- A collection of related data and/or functionality.
- Nearly all objects in JavaScript are instances of Object
```javascript
const obj = { key: value }
```
<br>

- How to declare object?
```javascript
const objectLiteral = {} // 'object literal' syntax
const objectConstructor = new Object() // 'object constructor' syntax
```
<br>

### Object property
- A JavaScript property is a member of an object that associates a key with a value. 
```javascript
const obj = {
  a: 1,
  b() {}
}
```
<br>

- JavaScript, as a dynamically typed language, allows you to add properties later and also delete it later.
```javascript
const objTest = { name: 'jisung', age: 20 }

objTest.hasJob = true
console.log(objTest.hasJob) // Expected output: true

delete objTest.hasJob
console.log(objTest.hasJob) // Expected output: undefined
```
<br>

### Computed property
```javascript
const objTest = { name: 'jisung', age: 20 }

console.log(objTest.name)    // Expected output: jisung
console.log(objTest['name']) // Expected output: jisung
console.log(objTest['age'])  // Expected output: 20

objTest['hasJob'] = true
console.log(objTest.hasJob) // Expected output: true

function printValue(objParam, keyParam) {
  console.log(objParam) // Expected output: { name: 'jisung', age: 20, hasJob: true }
  console.log(objParam.keyParam)  // Expected output: undefined, the reason is objParam doesn't have literally key: keyParam
  console.log(objParam[keyParam]) // Expected output: 'jisung', it is computed properties
  }

printValue(objTest, 'name')
```
<br>

### In operator: property existence check (key in obj)
```javascript
const obj = { name: 'jisung', age: 20 }

console.log('name' in obj)   // Expected output: true
console.log('random' in obj) // Expected output: false
```
<br>

## :label: Array
- An array is an ordered collection of data (either primitive or object depending upon the language). 
- Arrays are used to store multiple values under a single variable name. 
- A regular variable, on the other hand, can store only one value.
- Each item in an array has a number attached to it, called a numeric index, that allows you to access it. 
- In JavaScript, arrays start at index zero and can be manipulated with various methods.
- How to declare array?
```javascript
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

### Array.prototype
#### forEach()
- The forEach() method of Array instances executes a provided function once for each array element.
<br><br>

##### Syntax
```javascript
forEach(callbackFn)
forEach(callbackFn, thisArg)
```
<br>

##### Parameters
- callbackFn
   - A function to execute for each element in the array. 
   - Its return value is discarded. 
   - The function is called with the following arguments:
   - element
      - The current element being processed in the array.
   - index
      - The index of the current element being processed in the array.
   - array
      - The array forEach() was called upon.
<br><br>
- thisArg (Optional)
   - A value to use as this when executing callbackFn.
<br><br>

##### Return value
- None (undefined).
<br><br>

#### map()
- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
<br><br>

##### Syntax
```javascript
map(callbackFn)
map(callbackFn, thisArg)
```
<br>

##### Parameters
- callbackFn
   - A function to execute for each element in the array. 
   - Its return value is added as a single element in the new array. 
   - The function is called with the following arguments:
   - element
      - The current element being processed in the array.
   - index
      - The index of the current element being processed in the array.
   - array
      - The array map() was called upon.
<br><br>
- thisArg (Optional)
   - A value to use as this when executing callbackFn.
<br><br>

##### Return value
- A new array with each element being the result of the callback function.
<br><br>

#### reduce()
- The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
- The final result of running the reducer across all elements of the array is a single value.
<br><br>

##### Syntax
```javascript
reduce(callbackFn)
reduce(callbackFn, initialValue)
```
<br>

##### Parameters
- callbackFn
   - A function to execute for each element in the array. 
   - Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.
   - For the last invocation, the return value becomes the return value of reduce(). 
   - The function is called with the following arguments:
   - accumulator
      - The value resulting from the previous call to callbackFn. 
      - On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
   - currentValue
      - The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].
   - currentIndex
      - The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.
   - array
      - The array reduce() was called upon.

<br><br>
- initialValue (Optional)
   - A value to which accumulator is initialized the first time the callback is called. 
   - If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. 
   - If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. 
   - In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
<br><br>

##### Return value
- The value that results from running the "reducer" callback function to completion over the entire array.
<br><br>

## :label: Truthy and Falsy
### Truthy
- In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
- All values are truthy unless they are defined as falsy. 
<br><br>

### Falsy
- A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
```javascript
if (null || undefined || false || NaN || 0 || -0 || 0n || '') {
  console.log('Falsy')
}
```
<br>

### When should we use it?
```javascript
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

## :label: Destructuring assignment
- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
<br><br>

### Destructuring Array
```javascript
{
  // basic destructuring
  const array = [1, 2]
  const [a, b, c] = array
  console.log(a) // Expected output: 1
  console.log(b) // Expected output: 2
  console.log(c) // Expected output: undefined
}

{
  // skipping elements
  const array = [1, 2, 3]
  const [a, , b, c] = array
  console.log(a) // Expected output: 1
  console.log(b) // Expected output: 3
  console.log(c) // Expected output: undefined
}

{
  // default values
  const array = [undefined, 2]
  const [a = 10, b, c = 20] = array
  console.log(a) // Expected output: 10 (use default)
  console.log(b) // Expected output: 2
  console.log(c) // Expected output: 20
}

{
  // rest syntax
  const array = [1, 2, 3, 4, 5]
  const [a, b, ...rest] = array
  console.log(a) // Expected output: 1
  console.log(b) // Expected output: 2
  console.log(rest) // Expected output: [3, 4, 5]
}

{
  // rest syntax with specific positions
  const array = [1, 2, 3, 4, 5]
  const [a, , b, ...rest] = array
  console.log(a) // Expected output: 1
  console.log(b) // Expected output: 3
  console.log(rest) // Expected output: [4, 5]
}
```
<br>

### Destructuring Object
```javascript
{
  // basic destructuring
  const obj = { a: 1, b: 2 }
  const { a, b, c } = obj
  console.log(a) // Expected output: 1
  console.log(b) // Expected output: 2
  console.log(c) // Expected output: undefined
}

{
  // renaming variables
  const obj = { a: 1, b: 2 }
  const { a: a1, b: b1, c: c1 } = obj
  console.log(a1) // Expected output: 1
  console.log(b1) // Expected output: 2
  console.log(c1) // Expected output: undefined
}

{
  // default values
  const obj = { a: undefined, b: 2 }
  const aDefault = 10
  const bDefault = 20
  const { a: a1 = aDefault, b = bDefault, c = 30 } = obj
  console.log(a1) // Expected output: 10 (use default value)
  console.log(b) // Expected output: 2
  console.log(c) // Expected output: 30
}

{
  // rest syntax
  const obj = { a: 1, b: 2, c: 3, d: 4 }
  const { a, b, ...rest } = obj
  console.log(a) // Expected output: 1
  console.log(b) // Expected output: 2
  console.log(rest) // Expected output: { c: 3, d: 4 }
}

{
  // rest syntax with renaming
  const obj = { a: 1, b: 2, c: 3, d: 4 }
  const { a: a1, b: b1, ...rest } = obj
  console.log(a1) // Expected output: 1
  console.log(b1) // Expected output: 2
  console.log(rest) // Expected output: { c: 3, d: 4 }
}

{
  // computed property names
  const obj = { a: 1, b: 2, c: 3 }
  const key = 'a'
  const { [key]: a } = obj
  console.log(a) // Expected output: 1
}
```
<br>

## :label: Spread syntax and Rest argument
### Spread syntax
- The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
- In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
<br><br>

```javascript
{
  // using spread syntax in array
  const arr1 = [1, 2, 3]
  const arr2 = [...arr1, 4, 5, 6]

  console.log(arr2) // Expected output: [1, 2, 3, 4, 5, 6]
}

{
  // using spread syntax in string
  const str = 'Hello'
  const characters = [...str]

  console.log(characters) // Expected output: ['H', 'e', 'l', 'l', 'o']
}

{
  // using spread syntax in object
  const obj1 = { a: 1, b: 2 }
  const obj2 = { ...obj1, c: 3 }

  console.log(obj2) // Expected output: { a: 1, b: 2, c: 3 }
}

{
  // using spread syntax in object merging
  // if keys are the same, they will be overwritten.
  const obj1 = { a: 1, b: 2 }
  const obj2 = { d: 3, e: 4 }
  const obj3 = { ...obj1, ...obj2 }

  console.log(obj3) // Expected output: { a: 1, b: 2, d: 3, e: 4 }
}

{
  // using spread syntax in function calls
  const arr = [1, 2]

  function test(one, two, three) {
    console.log(one, two, three)
  }

  test(...arr) // Expected output: 1, 2, undefined
}
```
<br>

### Rest parameters
- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
<br><br>

```javascript
{
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]

  function test(ONE, TWO, ...rest) { // using rest parameters in function
    console.log(ONE) // Expected output: one
    console.log(TWO) // Expected output: two
    console.log(rest) // Expected output: [1, 2, 3, 4, 5, 6]
  }

  test('one', 'two', ...arr1, ...arr2) // spread syntax
}
```
<br>

## :label: Shallow copy and Deep copy
### Shallow copy
- A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
- As a result, when you change either the source or the copy, you may also cause the other object to change too. 
- That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
- The copy of an object whose properties all have primitive values fits the definition of both a deep copy and a shallow copy.
- For shallow copies, only the top-level properties are copied, not the values of nested objects. 
   - Therefore:
      - Re-assigning top-level properties of the copy does not affect the source object.
      - Re-assigning nested object properties of the copy does affect the source object.
- In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign()) do not create deep copies (instead, they create shallow copies).
<br><br>

### Deep copy
- A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
- As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 
- That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.
<br><br>

#### Shallow copy of Array
```javascript
{
  // same memory - array
  const arr1 = [1, 2]
  const arr2 = arr1

  // arr1 ──► (0x0000) [1, 2]
  // arr2 ─┘

  console.log(arr1 === arr2) // Expected output: true

  console.log(arr1) // Expected output: [1, 2]
  console.log(arr2) // Expected output: [1, 2]

  arr1[0] = 7

  console.log(arr1) // Expected output: [7, 2]
  console.log(arr2) // Expected output: [7, 2]
}

{
  // shallow copy - using spread syntax in array
  const arr1 = [1, 2]
  const arr2 = [...arr1]

  // arr1 ──► (0x0000) [1, 2]
  // arr2 ──► (0x0004) [1, 2]

  console.log(arr1 === arr2) // Expected output: false

  console.log(arr1) // Expected output: [1, 2]
  console.log(arr2) // Expected output: [1, 2]

  arr1[0] = 7

  console.log(arr1) // Expected output: [7, 2]
  console.log(arr2) // Expected output: [1, 2]
}

{
  // shallow copy - using spread syntax with nested arrays
  const arr1 = [1, 2, [3, 4]]
  const arr2 = [...arr1]

  // arr1 ──► (0x0000) [1, 2, ┬  ]
  //                          |─────► (0x0008) [3, 4]
  // arr2 ──► (0x0004) [1, 2, ┴  ]

  console.log(arr1 === arr2) // Expected output: false

  console.log(arr1) // Expected output: [1, 2, [3, 4]]
  console.log(arr2) // Expected output: [1, 2, [3, 4]]

  arr1[0] = 7
  arr1[2][0] = 9

  console.log(arr1) // Expected output: [7, 2, [9, 4]]
  console.log(arr2) // Expected output: [1, 2, [9, 4]]
}

{
  // same memory - nested arrays
  const arr1 = [1, 2, [3, 4]]
  const arr2 = arr1

  // arr1 ──► (0x0000) [1, 2, ┬ ]
  // arr2 ─┘                  ┴────► (0x0004) [3, 4]

  console.log(arr1 === arr2) // Expected output: true

  console.log(arr1) // Expected output: [1, 2, [3, 4]]
  console.log(arr2) // Expected output: [1, 2, [3, 4]]

  arr1[0] = 7
  arr1[2][0] = 9

  console.log(arr1) // Expected output: [7, 2, [9, 4]]
  console.log(arr2) // Expected output: [7, 2, [9, 4]]
}

{
  // same memory - object in array
  const arr1 = [1, 2, { key1: 'value1' }]
  const arr2 = arr1

  // arr1 ──► (0x0000) [1, 2, ┬ ]
  // arr2 ─┘                  ┴────► (0x0004) { key1: 'value1' }

  console.log(arr1 === arr2) // Expected output: true

  console.log(arr1) // Expected output: [ 1, 2, { key1: 'value1' } ]
  console.log(arr2) // Expected output: [ 1, 2, { key1: 'value1' } ]

  arr1[0] = 7
  arr1[2].key1 = 'value7'

  console.log(arr1) // Expected output: [ 7, 2, { key1: 'value7' } ]
  console.log(arr2) // Expected output: [ 7, 2, { key1: 'value7' } ]
}

{
  // shallow copy - using spread syntax to object in array
  const arr1 = [1, 2, { key1: 'value1' }]
  const arr2 = [...arr1]

  // arr1 ──► (0x0000) [1, 2, ┬  ]
  //                          |─────► (0x0008) { key1: 'value1' }
  // arr2 ──► (0x0004) [1, 2, ┴  ]

  console.log(arr1 === arr2) // Expected output: false

  console.log(arr1) // Expected output: [ 1, 2, { key1: 'value1' } ]
  console.log(arr2) // Expected output: [ 1, 2, { key1: 'value1' } ]

  arr1[0] = 7
  arr1[2].key1 = 'value7'

  console.log(arr1) // Expected output: [ 7, 2, { key1: 'value7' } ]
  console.log(arr2) // Expected output: [ 1, 2, { key1: 'value7' } ]
}
```
<br>

#### Shallow copy of Object
```javascript
{
  // same memory - object
  const obj1 = { key1: 'value1' }
  const obj2 = obj1

  // obj1 ──► (0x0000) { key1: 'value1' }
  // obj2 ─┘

  console.log(obj1 === obj2) // Expected output: true

  console.log(obj1) // Expected output: { key1: 'value1' }
  console.log(obj2) // Expected output: { key1: 'value1' }

  obj1.key1 = 'value7'

  console.log(obj1) // Expected output: { key1: 'value7' }
  console.log(obj2) // Expected output: { key1: 'value7' }
}

{
  // shallow copy - using spread syntax in object
  const obj1 = { key1: 'value1', key2: 'value2' }
  const obj2 = { ...obj1 }

  // obj1 ──► (0x0000) { key1: 'value1', key2: 'value2' }
  // obj2 ──► (0x0004) { key1: 'value1', key2: 'value2' }

  console.log(obj1 === obj2) // Expected output: false

  console.log(obj1) // Expected output: { key1: 'value1', key2: 'value2' }
  console.log(obj2) // Expected output: { key1: 'value1', key2: 'value2' }

  obj1.key1 = 'value7'

  console.log(obj1) // Expected output: { key1: 'value7', key2: 'value2' }
  console.log(obj2) // Expected output: { key1: 'value1', key2: 'value2' }
}

{
  // shallow copy - using spread syntax with nested objects
  const obj1 = { key1: 'value1', key2: { key3: 'value3', key4: 'value4' } }
  const obj2 = { ...obj1 }

  // obj1 ──► (0x0000) { key1: 'value1', key2: ┬ }
  //                                           |─────► (0x0008) { key3: 'value3', key4: 'value4' }
  // obj2 ──► (0x0004) { key1: 'value1', key2: ┴ }

  console.log(obj1 === obj2) // Expected output: false

  console.log(obj1) // Expected output: { key1: 'value1', key2: { key3: 'value3', key4: 'value4' } }
  console.log(obj2) // Expected output: { key1: 'value1', key2: { key3: 'value3', key4: 'value4' } }

  obj1.key1 = 'value7'
  obj1.key2.key3 = 'value9'

  console.log(obj1) // Expected output: { key1: 'value7', key2: { key3: 'value9', key4: 'value4' } }
  console.log(obj2) // Expected output: { key1: 'value1', key2: { key3: 'value9', key4: 'value4' } }
}

{
  // same memory - nested objects
  const obj1 = { key1: 'value1', key2: { key3: 'value3', key4: 'value4' } }
  const obj2 = obj1

  // obj1 ──► (0x0000) { key1: 'value1', key2:  ┬  }
  // obj2 ─┘                                    ┴────► (0x0004) { key3: 'value3', key4: 'value4' }

  console.log(obj1 === obj2) // Expected output: true

  console.log(obj1) // Expected output: { key1: 'value1', key2: { key3: 'value3', key4: 'value4' } }
  console.log(obj2) // Expected output: { key1: 'value1', key2: { key3: 'value3', key4: 'value4' } }

  obj1.key1 = 'value7'
  obj1.key2.key3 = 'value9'

  console.log(obj1) // Expected output: { key1: 'value7', key2: { key3: 'value9', key4: 'value4' } }
  console.log(obj2) // Expected output: { key1: 'value7', key2: { key3: 'value9', key4: 'value4' } }
}

{
  // same memory - array in object
  const obj1 = { key1: 'value1', key2: [1, 2, 3] }
  const obj2 = obj1

  // obj1 ──► (0x0000) { key1: 'value1', key2:  ┬  }
  // obj2 ─┘                                    ┴────► (0x0004) [1, 2, 3]

  console.log(obj1 === obj2) // Expected output: true

  console.log(obj1) // Expected output: { key1: 'value1', key2: [1, 2, 3] }
  console.log(obj2) // Expected output: { key1: 'value1', key2: [1, 2, 3] }

  obj1.key1 = 'value7'
  obj1.key2[1] = 7

  console.log(obj1) // Expected output: { key1: 'value7', key2: [1, 7, 3] }
  console.log(obj2) // Expected output: { key1: 'value7', key2: [1, 7, 3] }
}

{
  // shallow copy - using spread syntax to array in object
  const obj1 = { key1: 'value1', key2: [1, 2, 3] }
  const obj2 = { ...obj1 }

  // obj1 ──► (0x0000) { key1: 'value1', key2:  ┬  }
  //                                            |─────► (0x0008) [1, 2, 3]
  // obj2 ──► (0x0004) { key1: 'value1', key2:  ┴  }

  console.log(obj1 === obj2) // Expected output: false

  console.log(obj1) // Expected output: { key1: 'value1', key2: [1, 2, 3] }
  console.log(obj2) // Expected output: { key1: 'value1', key2: [1, 2, 3] }

  obj1.key1 = 'value7'
  obj1.key2[1] = 7

  console.log(obj1) // Expected output: { key1: 'value7', key2: [1, 7, 3] }
  console.log(obj2) // Expected output: { key1: 'value1', key2: [1, 7, 3] }
}
```
<br>

## :label: Synchronous and Asynchronous
- Synchronous
   - Execute code in order
- Asynchronous
   - Unpredictable when code will run
- JavaScript is synchronous.
   -Execute the code block in order after hoisting.
<br><br>

### Callback function
- A callback function is a function passed into another function as an argument, 
  which is then invoked inside the outer function to complete some kind of routine or action
<br><br>

```javascript
{
  // named callback function
  function callbackFunc() {
    console.log('run callbackFunc()')
  }

  function printData(callback) {
    console.log('run printData()')
    callback()
    console.log('done printData()')
  }

  printData(callbackFunc)
}

{
  // named callback function with parameters
  function callbackFunc(data) {
    console.log('run callbackFunc()')
    console.log(data)
  }

  function printData(num1, num2, callback) {
    console.log('run printData()')
    const sum = num1 + num2
    callback(sum)
    console.log('done printData()')
  }

  printData(1, 2, callbackFunc)
}

{
  // arrow callback function
  const callbackFunc = () => {
    console.log('run callbackFunc()')
  }

  function printData(callback) {
    console.log('run printData()')
    callback()
    console.log('done printData()')
  }

  printData(callbackFunc)
}

{
  // arrow callback function with parameters
  const callbackFunc = (data) => {
    console.log('run callbackFunc()')
    console.log(data)
  }

  function printData(num1, num2, callback) {
    console.log('run printData()')
    const sum = num1 + num2
    callback(sum)
    console.log('done printData()')
  }

  printData(1, 2, callbackFunc)
}

{
  // anonymous callback function
  function printData(callback) {
    console.log('run printData()')
    callback()
    console.log('done printData()')
  }

  printData(function () {
    console.log('run callbackFunc()')
  })
}

{
  // anonymous callback function with parameters
  function printData(num1, num2, callback) {
    console.log('run printData()')
    const sum = num1 + num2
    callback(sum)
    console.log('done printData()')
  }

  printData(1, 2, function (data) {
    console.log('run callbackFunc()')
    console.log(data)
  })
}

{
  // anonymous arrow callback function
  function printData(callback) {
    console.log('run printData()')
    callback()
    console.log('done printData()')
  }

  printData(() => {
    console.log('run callbackFunc()')
  })
}

{
  // anonymous arrow callback function with parameters
  function printData(num1, num2, callback) {
    console.log('run printData()')
    const sum = num1 + num2
    callback(sum)
    console.log('done printData()')
  }

  printData(1, 2, (sum) => {
    console.log('run callbackFunc()')
    console.log(sum)
  })
}
```

#### Synchronous Callback
```javascript
function callbackFunc(data) {
  console.log('run callbackFunc()')
  console.log(data)
  console.log('done callbackFunc()')
}

function doSynchronousTask(num1, num2, callback) {
  console.log('run doSynchronousTask()')
  const sum = num1 + num2
  callback(sum)
  console.log('done doSynchronousTask()')
}

doSynchronousTask(1, 2, callbackFunc)

/*
Expected output:
   run doSynchronousTask()
   run callbackFunc()
   3
   done callbackFunc()
   done doSynchronousTask()
*/
```
<br>

#### Asynchronous Callback
```javascript
function doAsynchronousTask(num1, num2, callback) {
  console.log('start doAsynchronousTask() task')
  setTimeout(() => {
    const sum = num1 + num2
    callback(sum)
  }, 2000)
  console.log('end doAsynchronousTask() task')
}

function callbackFunc(data) {
  console.log('run callbackFunc()')
  console.log(data)
  console.log('done callbackFunc()')
}

doAsynchronousTask(1, 2, callbackFunc)

/*
Expected output:
   run doAsynchronousTask()
   done doAsynchronousTask()
   run callbackFunc()
   3
   done callbackFunc()
*/
```
<br>

#### When should we use it?
```javascript
function doRepeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback(i)
  }
}

doRepeat(3, (i) => { // Expected output: 0, 1, 2
  console.log(i)
})

doRepeat(3, (i) => { // Expected output: 0, 2, 4
  console.log(i * 2)
})
```
<br>

### Promise
- A Promise is a JavaScript object for asynchronous operation.
- A Promise is in one of these states:
   - pending: initial state, neither fulfilled nor rejected.
   - fulfilled: meaning that the operation was completed successfully.
   - rejected: meaning that the operation failed.
<br><br>

#### Constructor
- Creates a new Promise object. 
- The constructor is primarily used to wrap functions that do not already support promises.
```javascript
// When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // doing some heavy work (network, read files)
    console.log('doing something...')
    resolve('success')
    // reject(new Error('no network'))
    console.log('after resolve or reject..')
  }, 1000)
})

console.log(promise) // Expected output: Promise {<pending>}

setTimeout(() => {
  console.log('promise done')
  console.log(promise) // Expected output: Promise {<fulfilled>: 'success'}
}, 2000)
```
<br>

#### Static methods
- Promise.resolve()
   - Returns a Promise object that is resolved with the given value. 
   - If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.
- Promise.reject()
   - Returns a new Promise object that is rejected with the given reason.
- Promise.try()
   - Takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a Promise.
- Promise.withResolvers()
   - Returns an object containing a new Promise object and two functions to resolve or reject it, corresponding to the two parameters passed to the executor of the Promise() constructor.
<br><br>

##### Promise concurrency
- The Promise class offers four static methods to facilitate async task concurrency:
   - Promise.all()
      - Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
      - Promise.all() waits until all the given promises are fulfilled and then returns an array of all the promises results.
      - If any of the promises are rejected, Promise.all() fails immediately with the reason from the rejected promise.
      ```javascript
      const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('First'), 1000)
      )
      const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('Second'), 3000)
      )
      const promise3 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('Third'), 2000)
      )
      
      Promise.all([promise1, promise2, promise3])
        .then((values) => {
          console.log('All promises fulfilled:', values) // Expected output: All promises fulfilled: ['First', 'Second', 'Third']
        })
        .catch((error) => {
          console.error('One or more promises rejected:', error)
        })
      ```
   <br>

   - Promise.allSettled()
      - Fulfills when all promises settle.
      - Promise.allSettled() waits until all given promises are either fulfilled or rejected, and then returns an array of objects representing the results of each promise.
      - Each object includes the promise’s status (fulfilled or rejected) and the result (value or reason).
      ```javascript
      const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('First'), 1000)
      )
      const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => reject('Second failed'), 3000)
      )
      const promise3 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('Third'), 2000)
      )
      
      Promise.allSettled([promise1, promise2, promise3]).then((results) => {
        console.log('All promises settled:', results)
        /*
        Expected output:
        All promises settled: [
          { status: 'fulfilled', value: 'First' },
          { status: 'rejected', reason: 'Second failed' },
          { status: 'fulfilled', value: 'Third' }
        ]
      */
      })
      ```
   <br>

   - Promise.any()
      - Fulfills when any of the promises fulfills; rejects when all of the promises reject.
      - Promise.any() returns the fulfillment result of the first promise that fulfills among the given promises. 
      - If all promises are rejected, it throws an AggregateError.
      ```javascript
      const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => reject('First failed'), 1000)
      )
      const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => reject('Second failed'), 3000)
      )
      const promise3 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('Third'), 2000)
      )
      
      Promise.any([promise1, promise2, promise3])
        .then((value) => {
          console.log('First fulfilled promise:', value) // Expected output: First fulfilled promise: Third
        })
        .catch((error) => {
          console.error('All promises were rejected:', error)
        })
      ```
   <br>

   - Promise.race()
      - Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
      - Promise.race() returns the first promise that either fulfills or rejects among the given promises. 
      - In other words, it returns the result of the first promise to settle.
      ```javascript
      const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('First'), 3000)
      )
      const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => reject('Second failed'), 1000)
      )
      const promise3 = new Promise((resolve, reject) =>
        setTimeout(() => resolve('Third'), 2000)
      )
      
      Promise.race([promise1, promise2, promise3])
        .then((value) => {
          console.log('Race winner:', value) // Expected output: Race winner: Second failed
        })
        .catch((error) => {
          console.error('Race failed with:', error)
        })
      ```
   <br>

#### Instance methods
- Promise.prototype.then()
   - Appends fulfillment and rejection handlers to the promise.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // doing some asynchronous operation
        setTimeout(() => resolve('Success'), 1000)
      })

      // Adding handlers with .then()
      promise.then(
        (value) => console.log('Fulfilled with:', value), // Handler for fulfillment - Expected output: Fulfilled with: Success
        (error) => console.error('Rejected with:', error) // Handler for rejection
      )
      ```
   <br>

   - And returns a new promise resolving to the return value of the called handler.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Original Value'), 1000)
      })

      const newPromise = promise.then((value) => {
        console.log('Handled Value:', value) // Expected output: Handled Value: Original Value
        return 'New Value'
      })

      newPromise.then((value) => console.log('New Promise Value:', value)) // Expected output: New Promise Value: New Value
      ```
   <br>

   - Or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).
      ```javascript
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Original Value"), 1000)
      })
      
      const newPromise = promise.then()  // No handler functions provided
      
      newPromise.then((value) => console.log("Original Value Passed Through:", value)) // Expected output: Original Value Passed Through: Original Value
      ```
   <br>

- Promise.prototype.catch()
   - Appends a rejection handler callback to the promise.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // Error occurs after 1 second
        setTimeout(() => reject(new Error('Something went wrong!')), 1000)
      })
      
      // Adding a rejection handler with catch()
      promise.catch((error) => {
        console.error('Caught Error:', error.message) // Expected output: Caught Error: Something went wrong!
      })
      ```
   <br>

   - And returns a new promise resolving to the return value of the callback if it is called.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // Error occurs after 1 second
        setTimeout(() => reject(new Error('Something went wrong!')), 1000)
      })
      
      const newPromise = promise.catch((error) => {
        console.error('Caught Error:', error.message) // Expected output: Caught Error: Something went wrong!
        return 'Recovered' // Returning a new value
      })
      
      newPromise.then((value) => {
        console.log('New Promise Value:', value) // Expected output: New Promise Value: Recovered
      })
      ```
   <br>

   - Or to its original fulfillment value if the promise is instead fulfilled.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // Successfully resolves after 1 second
        setTimeout(() => resolve('Success'), 1000)
      })
      
      const newPromise = promise.catch((error) => {
        console.error('Caught Error:', error.message)
        return 'Recovered'
      })
      
      newPromise.then((value) => {
        console.log('Original Fulfillment Value:', value) // Expected output: Original Fulfillment Value: Success
      })
      ```
   <br>

- Promise.prototype.finally()
   - Appends a handler to the promise.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // Successfully resolves after 1 second
        setTimeout(() => resolve('Success'), 1000)
      })
      
      // Adding a handler with finally()
      promise.finally(() => {
        console.log('Promise settled!') // Expected output: Promise settled!
      })
      ```
   <br>

   - And returns a new promise that is resolved when the original promise is resolved. 
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // Successfully resolves after 1 second
        setTimeout(() => resolve('Success'), 1000)
      })
      
      const newPromise = promise.finally(() => {
        console.log('Cleaning up...') // Expected output: Cleaning up...
      })
      
      newPromise.then((value) => {
        console.log('Final Value:', value) // Expected output: Final Value: Success
      })
      ```
   <br>

   - The handler is called when the promise is settled, whether fulfilled or rejected.
      ```javascript
      const promise = new Promise((resolve, reject) => {
        // Error occurs after 1 second
        setTimeout(() => reject(new Error('Something went wrong!')), 1000)
      })
      
      // finally() will be called whether the promise is fulfilled or rejected
      promise
        .catch((error) => {
          console.error('Caught Error:', error.message) // Expected output: Caught Error: Something went wrong!
        })
        .finally(() => {
          console.log('Promise settled! Cleaning up...') // Expected output: Promise settled! Cleaning up...
        })
      ```
   <br>

### async / await
- Promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
- An async function declaration creates an AsyncFunction object. 
- Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.
   - An async function automatically returns a Promise.
- Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. 
   - The await keyword can only be used inside async functions.
   - Async functions can contain zero or more await expressions.
- You can use await to handle Promises more cleanly and use try/catch blocks to manage errors in asynchronous code.

```javascript
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}

async function asyncCall() {
  console.log('calling')
  const result = await resolveAfter2Seconds()
  console.log(result)
  // Expected output: "resolved"
}

asyncCall()
```
