// ES6
/**
 ****************************************************************************************************
 * ### Shorthand property names
 ****************************************************************************************************
 */
console.log(`\n[ Shorthand property names ]`)

{
  // const objName = 'Jisung'
  // const objAge = '10'
  //
  // // const jisung = {
  // //   objName: objName,
  // //   objAge: objAge
  // // }
  //
  // const jisung = {
  //   objName,
  //   objAge
  // }
  //
  // console.log(`objName=${jisung.objName}, objAge=${jisung.objAge}`)
}

/**
 ****************************************************************************************************
 * ### Spread Syntax
 ****************************************************************************************************
 */
console.log(`\n[ Spread Syntax ]`)

{
  // // Array copy
  // const obj1 = { key: 'key1' }
  // const obj2 = { key: 'key2' }
  // const array = [obj1, obj2]
  // console.log(`c.log ## array ##`, array)
  //
  // const arrayCopy = [...array]
  // console.log(`c.log ## arrayCopy ##`, arrayCopy)
  //
  // const arrayCopy2 = [...array, { key: 'key3' }]
  // console.log(`c.log ## arrayCopy2 ##`, arrayCopy2)
}

// Array copy(Shallow copy)
{
  // const obj1 = { key: 'key1' }
  // const obj2 = { key: 'key2' }
  //
  // const array = [obj1, obj2]
  // const arrayCopy = [...array]
  //
  // obj1.key = 'newKey'
  //
  // console.log(`c.log ## array(Shallow copy) ##`, array)
  // console.log(`c.log ## arrayCopy(Shallow copy) ##`, arrayCopy)
}

// Array copy(Deep copy)
{
  // function deepCopy(obj) {
  //   if (obj === null || typeof obj !== 'object') {
  //     return obj
  //   }
  //
  //   if (Array.isArray(obj)) {
  //     let arrCopy = []
  //     obj.forEach((item, index) => {
  //       arrCopy[index] = deepCopy(item)
  //     })
  //     return arrCopy
  //   }
  //
  //   let objCopy = {}
  //   Object.keys(obj).forEach((key) => {
  //     objCopy[key] = deepCopy(obj[key])
  //   })
  //   return objCopy
  // }
  //
  // const obj1 = { key: 'key1' }
  // const obj2 = { key: 'key2' }
  //
  // const array = [obj1, obj2]
  // const arrayCopy = deepCopy(array)
  //
  // obj1.key = 'newKey'
  //
  // console.log(`c.log ## array(Deep copy) ##`, array)
  // console.log(`c.log ## arrayCopy(Deep copy) ##`, arrayCopy)
}

// object copy
{
  // const obj1 = { key: 'key1' }
  // const obj3 = { ...obj1 }
  //
  // console.log(`c.log ## obj1 ##`, obj1)
  // console.log(`c.log ## obj3 ##`, obj3)
}

{
  // // array concatenation
  // const fruits1 = ['peach', 'strawberry']
  // const fruits2 = ['banana', 'kiwi']
  // const fruits = [...fruits1, ...fruits2]
  // console.log(`c.log ## fruits ##`, fruits)
  //
  // // object merge
  // // Note: If keys are the same, they will be overwritten.
  // const dog1 = { dog1: 'dog1Value' }
  // const dog2 = { dog2: 'dog2Value' }
  // const dog = { ...dog1, ...dog2 }
  // console.log(`c.log ## dog ##`, dog)
}

/**
 ****************************************************************************************************
 * ### Default parameters
 ****************************************************************************************************
 * Default parameter is only for undefined
 */
console.log(`\n[ Default parameters ]`)

{
  // function printMessage(message) {
  //   console.log(`c.log ## message ##`, message)
  // }
  // printMessage('hello')
  // printMessage() // undefined
}

{
  // function printMessage(message = 'default message') {
  //   console.log(`c.log ## message ##`, message)
  // }
  // printMessage('hi')
  // printMessage()
}

// ES11
/**
 ****************************************************************************************************
 * ### Optional chaining
 ****************************************************************************************************
 */
console.log(`\n[ Optional chaining ]`)

{
  // const person1 = {
  //   name: 'Jisung',
  //   job: {
  //     title: 'S/W Engineer',
  //     manager: {
  //       name: 'Bob'
  //     }
  //   }
  // }
  //
  // const person2 = {
  //   name: 'Bob'
  // }
  //
  // {
  //   function printManager(person) {
  //     console.log(person.job.manager.name)
  //   }
  //   printManager(person1)
  //   // printManager(person2) // error
  // }
  //
  // {
  //   function printManager(person) {
  //     console.log(person.job?.manager?.name)
  //   }
  //   printManager(person1)
  //   printManager(person2)
  // }
}

// ES2021
/**
 ****************************************************************************************************
 * ### String.replaceAll
 ****************************************************************************************************
 */
console.log(`\n[ String.replaceAll ]`)

{
  // const str = 'Hello world'
  // console.log(`c.log ## str.replaceAll('l', '~') ##`, str.replaceAll('l', '~'))
}

/**
 ****************************************************************************************************
 * ### Promise.any
 ****************************************************************************************************
 */
console.log(`\n[ Promise.any ]`)

{
  // const resPromise = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res('success')
  //   }, 2000)
  // })
  //
  // const rejPromise = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     rej('fail..')
  //   }, 1000)
  // })
  //
  // // Return the object that first resolves or rejects among the Promises.
  // Promise.race([rejPromise, resPromise])
  //   .then(() => console.log('success'))
  //   .catch((error) => console.log(`c.log ## error ##`, error))
  //
  // // Return the object that first resolves among the Promises.
  // Promise.any([rejPromise, resPromise])
  //   .then(() => console.log('success'))
  //   .catch((error) => console.log(`c.log ## error ##`, error))
}

/**
 ****************************************************************************************************
 * ### Logical assignment Operators
 ****************************************************************************************************
 * ||=, &&=, ??=
 */
console.log(`\n[ Logical assignment Operators ]`)

{
  // function add(num1, num2) {
  //   // num1 ||= 0
  //   // num2 ||= 0
  //   console.log(`c.log ## num1 + num2 ##`, num1 + num2)
  // }
  // add()
}

/**
 ****************************************************************************************************
 * ### Numeric separators
 ****************************************************************************************************
 */
console.log(`\n[ Numeric separators ]`)

{
  // let billion = 1000000000
  // console.log(`c.log ## billion ##`, billion)
  //
  // billion = 1_000_000_000
  // console.log(`c.log ## billion ##`, billion)
}

/**
 ****************************************************************************************************
 * ### WeakRef(Weak reference)
 ****************************************************************************************************
 * Avoid where possible, correct use of WeakRef takes careful thought
 */
console.log(`\n[ WeakRef ]`)
{
  // let user = { name: 'Jisung', age: 30 }
  // const weakUser = new WeakRef(user)
  //
  // user = null
  //
  // const timer = setInterval(() => {
  //   const wUser = weakUser.deref()
  //   if (wUser) {
  //     console.log(`c.log ## wUser.name ##`, wUser.name)
  //   } else {
  //     console.log(`c.log ## it is removed ##`)
  //     clearInterval(timer)
  //   }
  // }, 1000)
}

{
  // class MyCache {
  //   constructor() {
  //     this.cache = {}
  //   }
  //
  //   add(key, obj) {
  //     this.cache[key] == new WeakRef(obj)
  //   }
  //   get(key) {
  //     let cachedRef = this.cache[key].deref()
  //     if (cachedRef) {
  //       return cachedRef
  //     } else {
  //       return false
  //     }
  //   }
  // }
}
