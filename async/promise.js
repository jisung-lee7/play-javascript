'use strict'
/**
 ****************************************************************************************************
 * ### Promise
 ****************************************************************************************************
 * Promise is a JavaScript object for asynchronous operation.
 * state: pending -> fulfilled or rejected
 * Producer vs Consumer
 */
console.log(`\n[ Promise ]`)

{
  // const promise = new Promise(() => {})
  // console.log(`c.log ## promise ##`, promise)
}

/**
 ****************************************************************************************************
 * ### Producer
 ****************************************************************************************************
 * When new Promise is created, the executor runs automatically.
 */
console.log(`\n[ Producer ]`)

{
  // // When new Promise is created, the executor runs automatically.
  // const promise = new Promise((resolve, reject) => {
  //   // doing some heavy work (network, read files)
  //   console.log('doing something...')
  //   setTimeout(() => {
  //     resolve('success')
  //     // reject(new Error('no network'))
  //   }, 1000)
  // })
  //
  // console.log(promise)
  //
  // setTimeout(() => {
  //   console.log('done')
  //   console.log(promise)
  // }, 2000)
}

/**
 ****************************************************************************************************
 * ### Consumers: then, catch, finally
 ****************************************************************************************************
 */
console.log(`\n[ Consumers: then, catch, finally ]`)

{
  // const promise = new Promise((resolve, reject) => {
  //   // doing some heavy work (network, read files)
  //   console.log(`doing something...`)
  //   setTimeout(() => {
  //     resolve('jisung')
  //     // reject(new Error('no network'))
  //   }, 2000)
  // })
  //
  // promise
  //   .then((value) => {
  //     console.log(value)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   .finally(() => {
  //     console.log(`finally`)
  //   })
}

/**
 ****************************************************************************************************
 * ### Promise chaining
 ****************************************************************************************************
 */
console.log(`\n[ Promise chaining ]`)

{
  // const fetchNumber = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(1), 1000)
  // })
  //
  // fetchNumber
  //   .then((num) => num * 2)
  //   .then((num) => num * 3)
  //   .then((num) => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => resolve(num - 1), 1000)
  //     })
  //   })
  //   .then((num) => console.log(num))
}

/**
 ****************************************************************************************************
 * ### Error handling
 ****************************************************************************************************
 */
console.log(`\n[ Error handling ]`)

{
  // const getHen = () =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => resolve('hen'), 1000)
  //   })
  //
  // const getEgg = (hen) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000)
  //   })
  //
  // const cook = (egg) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(`${egg} => fry`), 1000)
  //   })
  //
  // // getHen()
  // //   .then((hen) => getEgg(hen))
  // //   .then((egg) => cook(egg))
  // //   .then((meal) => console.log(meal))
  //
  // // When passing a callback function that receives a single value,
  // // and when passing that value to the next function, it can be omitted.
  // getHen() //
  //   .then(getEgg)
  //   .catch((error) => {
  //     return 'bread'
  //   })
  //   .then(cook)
  //   .then(console.log)
  //   .catch(console.log)
}

/**
 ****************************************************************************************************
 * ### Examples
 ****************************************************************************************************
 */
console.log(`\n[ Examples ]`)

{
  // // before use Promise
  // const f1 = (callback) => {
  //   setTimeout(function () {
  //     console.log('order 1 done')
  //     callback()
  //   }, 1000)
  // }
  //
  // const f2 = (callback) => {
  //   setTimeout(function () {
  //     console.log('order 2 done')
  //     callback()
  //   }, 1000)
  // }
  //
  // const f3 = (callback) => {
  //   setTimeout(function () {
  //     console.log('order 3 done')
  //     callback()
  //   }, 1000)
  // }
  //
  // console.log(`start`)
  //
  // f1(function () {
  //   f2(function () {
  //     f3(function () {
  //       console.log(`end`)
  //     })
  //   })
  // })
}

{
  // // after use Promise
  // const f1 = () => {
  //   return new Promise((res, rej) => {
  //     setTimeout(function () {
  //       res('order 1 done')
  //     }, 2000)
  //   })
  // }
  //
  // const f2 = (message) => {
  //   console.log(`c.log ## message ## ${message}`)
  //   return new Promise((res, rej) => {
  //     setTimeout(function () {
  //       res('order 2 done')
  //     }, 1000)
  //   })
  // }
  //
  // const f3 = (message) => {
  //   console.log(`c.log ## message ## ${message}`)
  //   return new Promise((res, rej) => {
  //     setTimeout(function () {
  //       res('order 3 done')
  //     }, 3000)
  //   })
  // }
  //
  // console.log(`start`)
  //
  // {
  //   // // Promise chaining
  //   // f1()
  //   //   .then((res) => f2(res))
  //   //   .then((res) => f3(res))
  //   //   .then((res) => console.log(`c.log ## res ## ${res}`))
  //   //   .catch(console.log)
  //   //   .finally(() => {
  //   //     console.log(`c.log ## end ##`)
  //   //   })
  // }
  //
  // {
  //   // // Promise.all
  //   // console.time('x')
  //   // Promise.all([f1(), f2(), f3()]).then((res) => {
  //   //   console.log(`c.log ## res ## ${res}`)
  //   //   console.timeEnd('x')
  //   // })
  // }
  //
  // {
  //   // // Promise.race
  //   // console.time('x')
  //   // Promise.race([f1(), f2(), f3()]).then((res) => {
  //   //   console.log(`c.log ## res ## ${res}`)
  //   //   console.timeEnd('x')
  //   // })
  // }
}
