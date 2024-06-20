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
console.log(`\n[ Literals and properties ]`)

{
  const objectLiteral = {} // 'object literal' syntax
  const objectConstructor = new Object() // 'object constructor' syntax

  function doPrint(personParam) {
    console.log(`c.log ## personParam.name ##`, personParam.name)
    console.log(`c.log ## personParam.age ##`, personParam.age)
  }

  const objTest = { name: 'jisung', age: 1 }
  doPrint(objTest)

  // JavaScript as a dynamically typed language enables the following,
  // can add properties later
  objTest.hasJob = true
  console.log(`c.log ## objTest.hasJob ##`, objTest.hasJob)

  // can delete properties later
  delete objTest.hasJob
  console.log(`c.log ## objTest.hasJob ##`, objTest.hasJob)
}

// this
{
  let boy = {
    name: 'Mike',
    showName: function () {
      console.log(`c.log ## boy.name ##`, this.name) // test user.name
    }
  }

  let man = boy

  boy = null
  // test user.name
  // console.log(`boy.name = ${boy.name}`) // null
  // boy.showName() // null

  console.log(`man.name = ${man.name}`)
  man.showName()
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

/**
 ****************************************************************************************************
 * ### Computed properties
 ****************************************************************************************************
 * key should be always string
 */
console.log(`\n[ Computed properties ]`)

{
  const objTest = { name: 'jisung', age: 2 }

  console.log(`c.log ## objTest.name ##`, objTest.name)
  console.log(`c.log ## objTest['name'] ##`, objTest['name'])
  console.log(`c.log ## objTest['age'] ##`, objTest['age'])

  objTest['hasJob'] = true
  console.log(`c.log ## objTest.hasJob ##`, objTest.hasJob)

  function printValue(objParam, keyParam) {
    console.log(objParam.keyParam) // undefined, the reason is objParam doesn't have key: keyParam
    console.log(objParam[keyParam]) // computed properties
  }

  printValue(objTest, 'name')
}

{
  function makeObj(key, value) {
    return {
      [key]: value
    }
  }

  const obj = makeObj('gender', 'male')
  console.log(`c.log ## obj ##`, obj)
}

{
  const id = Symbol('id')
  const user = {
    name: 'Jisung',
    age: 30,
    [id]: 'myId'
  }

  console.log(`c.log ## user ##`, user)
  console.log(`c.log ## user[id] ##`, user[id])

  const showName = Symbol('show name')
  user[showName] = function () {
    console.log(`c.log ## this.name ##`, this.name)
  }
  user[showName]()

  Object.keys(user)
  Object.values(user)
  Object.entries(user)

  console.log(`c.log ## Object.keys(user) ##`, Object.keys(user))
  console.log(`c.log ## Object.values(user) ##`, Object.values(user))
  console.log(`c.log ## Object.entries(user) ##`, Object.entries(user))

  for (let key in user) {
    console.log(`c.log ## key ##`, key)
  }

  // getOwnPropertySymbols()
  console.log(
    `c.log ## Object.getOwnPropertySymbols(user) ##`,
    Object.getOwnPropertySymbols(user)
  )

  // Reflect.ownKeys()
  console.log(
    `c.log ## Reflect.ownKeys(user)
 ##`,
    Reflect.ownKeys(user)
  )
}

/**
 ****************************************************************************************************
 * ### Property value shorthand(Shorthand property names)
 ****************************************************************************************************
 */
console.log(`\n[ Property value shorthand(Shorthand property names) ]`)

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

/**
 ****************************************************************************************************
 * ### Constructor function
 ****************************************************************************************************
 * It should begin with an uppercase letter.
 * It should be called using the 'new' operator.(let testPerson = new Person('Jisung', 30))
 */
console.log(`\n[ Constructor function ]`)

function Person(name, age) {
  // this = {} // it does not exist in the real code. If called using the 'new', it behaves according to that algorithm.
  this.name = name
  this.age = age
  // return this // it doesn't not exist in the real code.
}

console.log(`c.log ## person4 ##`, person4)
console.log(`c.log ## person5 ##`, person5)

/**
 ****************************************************************************************************
 * ### In operator: property existence check (key in obj)
 ****************************************************************************************************
 */
console.log(`\n[ In operator: property existence check (key in obj) ]`)

{
  const obj = { name: 'jisung', age: 3 }

  console.log(`name` in obj)
  console.log(`age` in obj)
  console.log(`random` in obj)
  console.log(obj.random)
}
/**
 ****************************************************************************************************
 * ### for..in vs for..of
 ****************************************************************************************************
 */
console.log(`\n[ for..in vs for..of ]`)

{
  // for (key in obj)
  const obj = { name: 'jisung', age: 4 }

  for (const localKey in obj) {
    console.log(`c.log ## localKey ##`, localKey)
    console.log(`c.log ## obj[key] ##`, obj[localKey])
  }
}

// for (value of iterable) - available in object, array, list
const array = [1, 2, 3, 4, 5]
for (const value of array) {
  console.log(`c.log ## value ##`, value)
}

/**
 ****************************************************************************************************
 * ### Object methods
 ****************************************************************************************************
 */
console.log(`\n[ Object methods ]`)

// Object.assign(dest(initial value), [obj1, obj2, obj3, ...]) - clone object
{
  // Clone user1
  const user1 = { name: 'jisung', age: '10' }
  const user2 = user1
  user2.name = 'hello, world'
  console.log(`c.log ## user1 ##`, user1)

  // old way
  const user3 = {}
  for (const keyParam in user1) {
    user3[keyParam] = user1[keyParam]
  }
  console.log(`c.log ## user3 ##`, user3)

  // const user4 = {}
  // Object.assign(user4, user1)
  const user4 = Object.assign({}, user1)
  console.log(`c.log ## user4 ##`, user4)

  // Clone fruit1, fruit2
  const fruit1 = { color: 'red' }
  const fruit2 = { color: 'blue', size: 'big' }
  const mixed = Object.assign({}, fruit1, fruit2)
  console.log(mixed.color)
  console.log(mixed.size)
}

// Object.keys() - returns an array of keys
{
  const user = {
    name: 'Jisung',
    age: 30,
    gender: 'male'
  }

  const objectKeys = Object.keys(user)
  console.log(`c.log ## objectKeys ##`, objectKeys)
}

// Object.values() - returns an array of values
{
  const user = {
    name: 'Jisung',
    age: 30,
    gender: 'male'
  }

  const objectValues = Object.values(user)
  console.log(`c.log ## objectValues ##`, objectValues)
}

// Object.entries() - returns an array of key/values
{
  const user = {
    name: 'Jisung',
    age: 30,
    gender: 'male'
  }

  const objectEntries = Object.entries(user)
  console.log(`c.log ## objectEntries ##`, objectEntries)
}

// Object.fromEntries() - returns an object created by key-value entries
{
  const arr = [
    ['name', 'Jisung'],
    ['age', 30],
    ['gender', 'male']
  ]

  const objectFromEntries = Object.fromEntries(arr)
  console.log(`c.log ## objectFromEntries ##`, objectFromEntries)
}
