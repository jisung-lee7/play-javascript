'use strict'

/**
 ****************************************************************************************************
 * ### JSON(JavaScript Object Notation)
 ****************************************************************************************************
 * Simplest data interchange format
 * Lightweight text-based structure
 * Easy to read
 * Key-value pairs
 * used for serialization and transmission of data between the network the network connection
 * independent programming language and platform
 */

/**
 ****************************************************************************************************
 * ### Object to JSON
 ****************************************************************************************************
 * stringify
 */
let json = JSON.stringify(true)
console.log('c.log ## json ##', json)

json = JSON.stringify(['apple', 'banana'])
console.log('c.log ## json ##', json)

const rabbit = {
  name: 'ppoddo',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`)
  }
}
json = JSON.stringify(rabbit)
console.log('c.log ## json ##', json)

json = JSON.stringify(rabbit, ['name', 'color'])
console.log('c.log ## json ##', json)

json = JSON.stringify(rabbit, (key, value) => {
  return key === 'name' ? 'jisung' : value
})
console.log('c.log ## json ##', json)

/**
 ****************************************************************************************************
 * ### JSON to Object
 ****************************************************************************************************
 * parse(json)
 */
json = JSON.stringify(rabbit)
console.log('c.log ## json ##', json)

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birthDate' ? new Date(value) : value
  // return value
})
console.log('c.log ## obj ##', obj)

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate())
