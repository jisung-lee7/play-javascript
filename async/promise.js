'use strict'
/**
 ****************************************************************************************************
 * ### Promise
 ****************************************************************************************************
 * Promise is a JavaScript object for asynchronous operation.
 * state: pending -> fulfilled or rejected
 * Producer vs Consumer
 */

/**
 ****************************************************************************************************
 * ### Producer
 ****************************************************************************************************
 * When new Promise is created, the executor runs automatically.
 */
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log(`doing something...`)
  setTimeout(() => {
    resolve('jisung')
    // reject(new Error('no network'))
  }, 2000)
})

console.log(`c.log ## promise ##`, promise)

setTimeout(() => {
  console.log(`done`)
  console.log(`c.log ## promise ##`, promise)
}, 3000)

/**
 ****************************************************************************************************
 * ### Consumers: then, catch, finally
 ****************************************************************************************************
 */
promise
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log(`finally`)
  })

/**
 ****************************************************************************************************
 * ### Promise chaining
 ****************************************************************************************************
 */
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000)
    })
  })
  .then((num) => console.log(num))

/**
 ****************************************************************************************************
 * ### Error handling
 ****************************************************************************************************
 */
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('hen'), 1000)
  })

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000)
  })

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fry`), 1000)
  })

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal))

// When passing a callback function that receives a single value,
// and when passing that value to the next function, it can be omitted.
getHen() //
  .then(getEgg)
  .catch((error) => {
    return 'bread'
  })
  .then(cook)
  .then(console.log)
  .catch(console.log)
