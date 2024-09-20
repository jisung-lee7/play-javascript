'use strict'

/**
 ****************************************************************************************************
 * ### Promise state
 ****************************************************************************************************
 */
console.log(`\n[ Promise state ]`)

{
  // const obj = {
  //   name: 'Jisung',
  //   id: 'JisungLee'
  // }
  //
  // const promise = new Promise((resolve, reject) => {
  //   resolve(obj)
  // })
  //
  // function usePromise() {
  //   return new Promise((resolve, reject) => {
  //     resolve(obj)
  //   })
  // }
  //
  // async function useAsync() {
  //   return obj
  // }
  //
  // async function useAsyncPromise() {
  //   return new Promise((resolve, reject) => {
  //     resolve(obj)
  //   })
  // }
  //
  // console.log(promise) // Expected output: Promise {<fulfilled>: { name: 'Jisung', id: 'JisungLee' }}
  // console.log(usePromise()) // Expected output: Promise {<pending>: { name: 'Jisung', id: 'JisungLee' }}
  // console.log(useAsync()) // Expected output: Promise {<fulfilled>: { name: 'Jisung', id: 'JisungLee' }}
  // console.log(useAsyncPromise()) // Expected output: Promise {<pending>}
}

/**
 ****************************************************************************************************
 * ### Callback - callback hell
 ****************************************************************************************************
 */

{
  // const buyGrocery = (callback) => {
  //   console.log('01: run buyGrocery')
  //   setTimeout(() => {
  //     console.log('03: run async buyGrocery -- after 2 seconds')
  //     const grocery = 'kimchi'
  //     callback(grocery)
  //     console.log('09: done async buyGrocery')
  //   }, 2000)
  //
  //   console.log('02: done buyGrocery')
  // }
  //
  // const cookFood = (grocery, callback) => {
  //   console.log('06: run cookFood')
  //   setTimeout(() => {
  //     console.log('10: run async cookFood -- after 2 seconds')
  //     console.log(`11: cooking ${grocery}`)
  //     const food = `cooked ${grocery}`
  //     callback(food)
  //     console.log('17: done async cookFood')
  //   }, 2000)
  //
  //   console.log('07: done cookFood')
  // }
  //
  // const sellFood = (food, callback) => {
  //   console.log('14: run sellFood')
  //   setTimeout(() => {
  //     console.log('18: run async sellFood -- after 2 seconds')
  //     console.log(`19: packaging ${food}`)
  //     const menu = `packaged ${food}`
  //     callback(menu)
  //     console.log('23: done async sellFood')
  //   }, 2000)
  //   console.log('15: done sellFood')
  // }
  //
  // buyGrocery((grocery) => {
  //   console.log('04: run buyGrocery callback')
  //   console.log(`05: ${grocery}`)
  //   cookFood(grocery, (food) => {
  //     console.log('12: run cookFood callback')
  //     console.log(`13: ${food}`)
  //     sellFood(food, (menu) => {
  //       console.log('20: run sellFood callback')
  //       console.log(`21: ${menu}`)
  //       console.log('22: done sellFood callback')
  //     })
  //     console.log('16: done cookFood callback')
  //   })
  //   console.log('08: done buyGrocery callback')
  // })
}

/**
 ****************************************************************************************************
 * ### Promise - resolve callback hell
 ****************************************************************************************************
 */

{
  // const buyGrocery = () => {
  //   console.log('01: run buyGrocery')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('03: run async buyGrocery -- after 2 seconds')
  //       const grocery = 'kimchi'
  //       resolve(grocery)
  //       console.log('04: done async buyGrocery')
  //     }, 2000)
  //     console.log('02: done buyGrocery')
  //   })
  // }
  //
  // const cookFood = (grocery) => {
  //   console.log('06: run cookFood')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('08: run async cookFood -- after 2 seconds')
  //       console.log(`09: cooking ${grocery}`)
  //       const food = `cooked ${grocery}`
  //       resolve(food)
  //       console.log('10: done async cookFood')
  //     }, 2000)
  //     console.log('07: done cookFood')
  //   })
  // }
  //
  // const sellFood = (food) => {
  //   console.log('12: run sellFood')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('14: run async sellFood -- after 2 seconds')
  //       console.log(`15: packaging ${food}`)
  //       const menu = `packaged ${food}`
  //       resolve(menu)
  //       console.log('16: done async sellFood')
  //     }, 2000)
  //     console.log('13: done sellFood')
  //   })
  // }
  //
  // buyGrocery()
  //   .then((grocery) => {
  //     console.log(`05: ${grocery}`)
  //     return cookFood(grocery)
  //   })
  //   .then((food) => {
  //     console.log(`11: ${food}`)
  //     return sellFood(food)
  //   })
  //   .then((menu) => {
  //     console.log(`17: ${menu}`)
  //   })
}

/**
 ****************************************************************************************************
 * ### async, await - resolve promise
 ****************************************************************************************************
 */
{
  // const buyGrocery = () => {
  //   console.log('01: run buyGrocery')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('03: run async buyGrocery -- after 2 seconds')
  //       const grocery = 'kimchi'
  //       resolve(grocery)
  //       console.log('04: done async buyGrocery')
  //     }, 2000)
  //     console.log('02: done buyGrocery')
  //   })
  // }
  //
  // const cookFood = (grocery) => {
  //   console.log('06: run cookFood')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('08: run async cookFood -- after 2 seconds')
  //       console.log(`09: cooking ${grocery}`)
  //       const food = `cooked ${grocery}`
  //       resolve(food)
  //       console.log('10: done async cookFood')
  //     }, 2000)
  //     console.log('07: done cookFood')
  //   })
  // }
  //
  // const sellFood = (food) => {
  //   console.log('12: run sellFood')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('14: run async sellFood -- after 2 seconds')
  //       console.log(`15: packaging ${food}`)
  //       const menu = `packaged ${food}`
  //       resolve(menu)
  //       console.log('16: done async sellFood')
  //     }, 2000)
  //     console.log('13: done sellFood')
  //   })
  // }
  //
  // const printData = async () => {
  //   const grocery = await buyGrocery()
  //   console.log(`05: ${grocery}`)
  //
  //   const food = await cookFood(grocery)
  //   console.log(`11: ${food}`)
  //
  //   const menu = await sellFood(food)
  //   console.log(`17: ${menu}`)
  // }
  //
  // printData()
}
