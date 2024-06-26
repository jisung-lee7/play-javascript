/**
 ****************************************************************************************************
 * ### Promise
 ****************************************************************************************************
 */
console.log(`\n[ Promise ]`)

{
  // function promiseFetchUser() {
  //   return new Promise((resolve) => {
  //     // do network request in 10 secs...
  //     resolve('jisung')
  //   })
  // }
  //
  // const promiseUser = promiseFetchUser()
  // console.log(`c.log ## promiseUser ##`, promiseUser)
  //
  // promiseUser.then((value) =>
  //   console.log(`promiseUser.then() value is ${value}`)
  // )
}

/**
 ****************************************************************************************************
 * ### async
 ****************************************************************************************************
 * Clear style of using promise
 * Syntactic sugar
 */
console.log(`\n[ async ]`)

{
  // async function asyncFetchUser() {
  //   // do network request in 10 secs...
  //   return 'jisung'
  // }
  //
  // const asyncUser = asyncFetchUser()
  // asyncUser.then((value) => console.log(`asyncUser.then() value is ${value}`))
  // console.log(`c.log ## asyncUser ##`, asyncUser)
}

/**
 ****************************************************************************************************
 * ### await - it can only be used inside functions with 'async'
 ****************************************************************************************************
 * Clear style of using promise
 * Syntactic sugar
 */
console.log(`\n[ await - it can only be used inside functions with 'async' ]`)

{
  // function delay(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms))
  // }
  //
  // async function getApple() {
  //   await delay(1000)
  //   // throw 'error'
  //   return 'apple'
  // }
  //
  // // function getBanana() {
  // //   return delay(3000).then(() => 'banana')
  // // }
  //
  // async function getBanana() {
  //   await delay(1000)
  //   return 'banana'
  // }
  //
  // // promise chaining
  // function pickFruits() {
  //   return getApple().then((apple) => {
  //     return getBanana().then((banana) => `${apple} + ${banana}`)
  //   })
  // }
  // pickFruits().then((value) => {
  //   console.log(`c.log ## pickFruits value is ##`, value)
  // })
  //
  // // 2
  // // Sequential execution and lack of concurrency
  // async function asyncPickFruits() {
  //   const apple = await getApple()
  //   const banana = await getBanana()
  //   return `${apple} + ${banana}`
  // }
  //
  // asyncPickFruits().then((value) => {
  //   console.log(`c.log ## asyncPickFruits value is ##`, value)
  // })
  //
  // // 3
  // // Concurrent execution but code is so dirty
  // async function asyncDirtyPickFruits() {
  //   const applePromise = getApple()
  //   const bananaPromise = getBanana()
  //   const apple = await applePromise
  //   const banana = await bananaPromise
  //   return `${apple} + ${banana}`
  // }
  //
  // asyncDirtyPickFruits().then((value) => {
  //   console.log(`c.log ## asyncDirtyPickFruits value is ##`, value)
  // })
  //
  // // So we use Promise APIs(Promise.all, Promise.race)
  // // Promise.all
  // function promiseAllPickFruits() {
  //   return Promise.all([getApple(), getBanana()]).then((fruits) =>
  //     fruits.join(' + ')
  //   )
  // }
  //
  // promiseAllPickFruits().then((value) => {
  //   console.log(`c.log ## promiseAllPickFruits value is ##`, value)
  // })
  //
  // // Promise.race
  // function promiseRacePickFruits() {
  //   return Promise.race([getApple(), getBanana()])
  // }
  //
  // promiseRacePickFruits().then((value) => {
  //   console.log(`c.log ## promiseRacePickFruits value is ##`, value)
  // })
}

/**
 ****************************************************************************************************
 * ### Examples
 ****************************************************************************************************
 */
console.log(`\n[ Examples ]`)

{
  // async
  // async function getName() {
  //   return 'Jisung'
  //   // return Promise.resolve('Jenny')
  //   // throw new Error('error..')
  // }
  // console.log(`c.log ## getName() ##`, getName())
  // getName()
  //   .then((name) => {
  //     console.log(`c.log ## name ##`, name)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}

{
  // // await
  // function getName(name) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(name)
  //     }, 1000)
  //   })
  // }
  //
  // async function showName() {
  //   const result = await getName('Jisung')
  //   console.log(`c.log ## result ##`, result)
  // }
  //
  // console.log('start')
  // showName()
}

{
  const f1 = (message) => {
    return new Promise((res, rej) => {
      setTimeout(function () {
        res('order 1 done')
      }, 1000)
    })
  }

  const f2 = (message) => {
    console.log(`c.log ## message ## ${message}`)
    return new Promise((res, rej) => {
      setTimeout(function () {
        res('order 2 done')
        // rej(new Error('error...'))
      }, 3000)
    })
  }

  const f3 = (message) => {
    console.log(`c.log ## message ## ${message}`)
    return new Promise((res, rej) => {
      setTimeout(function () {
        res('order 3 done')
      }, 2000)
    })
  }

  // async, await
  // async function order() {
  //   try {
  //     console.log(`c.log ## start ##`)
  //     const result1 = await f1()
  //     const result2 = await f2(result1)
  //     const result3 = await f3(result2)
  //     console.log(`c.log ## result3 ##`, result3)
  //   } catch (error) {
  //     console.log(`c.log ## error ##`, error)
  //   }
  //   console.log(`c.log ## end ##`)
  // }

  // Promise.all
  async function order() {
    try {
      console.log(`c.log ## start ##`)
      const result = await Promise.all([f1(), f2(), f3()])
      console.log(`c.log ## result ##`, result)
    } catch (error) {
      console.log(`c.log ## error ##`, error)
    }
    console.log(`c.log ## end ##`)
  }

  order()
  // f1()
  //   .then((res) => f2(res))
  //   .then((res) => f3(res))
  //   .then((res) => console.log(`c.log ## res ## ${res}`))
  //   .catch(console.log)
  //   .finally(() => {
  //     console.log(`c.log ## end ##`)
  //   })
}
