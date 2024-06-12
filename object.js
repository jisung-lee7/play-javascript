'use strict'
/**
 ****************************************************************************************************
 * ### Objects
 ****************************************************************************************************
 * One of the JavaScript's data types.
 * A collection of related data and/or functionality.
 * Nearly all objects in JavaScript are instances of Object
 * Object = { key : value };
 */

/**
 ****************************************************************************************************
 * ### Literals and properties
 ****************************************************************************************************
 */
const obj1 = {} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax

function print(personParam) {
  console.log(personParam.name)
  console.log(personParam.age)
}

const obj3 = { name: 'jisung', age: 7 }
print(obj3)

// With JavaScript magic (dynamically typed language)
// can add properties later
obj3.hasJob = true
console.log('c.log ## obj3.hasJob ##', obj3.hasJob)

// can delete properties later
delete obj3.hasJob
console.log('c.log ## obj3.hasJob ##', obj3.hasJob)

/**
 ****************************************************************************************************
 * ### Computed properties
 ****************************************************************************************************
 * key should be always string
 */
console.log(obj3.name)
console.log(obj3['name'])
obj3['hasJob'] = true
console.log('c.log ## obj3.hasJob ##', obj3.hasJob)

function printValue(objParam, keyParam) {
  console.log(objParam.keyParam)
  console.log(objParam[keyParam]) // computed properties
}
printValue(obj3, 'name')

/**
 ****************************************************************************************************
 * ### Property value shorthand(Shorthand property names)
 ****************************************************************************************************
 */
const person1 = { name: 'personA', age: 1 }
const person2 = { name: 'personB', age: 2 }
const person3 = { name: 'personC', age: 3 }
const person4 = makePerson('personD', 4)
const person5 = new Person('personE', 5)

function makePerson(name, age) {
  return {
    // property value shorthand
    name, // name: name
    age // age: age
  }
}

// Constructor function
function Person(name, age) {
  // this = {}
  this.name = name
  this.age = age
  // return this
}

console.log('c.log ## person4 ##', person4)
console.log('c.log ## person5 ##', person5)

/**
 ****************************************************************************************************
 * ### In operator: property existence check (key in obj)
 ****************************************************************************************************
 */
console.log('name' in obj3)
console.log('age' in obj3)
console.log('random' in obj3)
console.log(obj3.random)

/**
 ****************************************************************************************************
 * ### for..in vs for..of
 ****************************************************************************************************
 */
// for (key in obj)
for (const localKey in obj3) {
  console.log('c.log ## localKey ##', localKey)
}

// for (value of iterable) - available in object, array, list
const array = [1, 2, 3, 4, 5]
for (const value of array) {
  console.log('c.log ## value ##', value)
}

/**
 ****************************************************************************************************
 * ### Cloning
 ****************************************************************************************************
 */
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user1 = { name: 'jisung', age: '10' }
const user2 = user1
user2.name = 'hello, world'
console.log('c.log ## user1 ##', user1)

// old way
const user3 = {}
for (const keyParam in user1) {
  user3[keyParam] = user1[keyParam]
}
console.log('c.log ## user3 ##', user3)

// const user4 = {}
// Object.assign(user4, user1)
const user4 = Object.assign({}, user1)
console.log('c.log ## user4 ##', user4)

const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed.color)
console.log(mixed.size)
