/**
 ****************************************************************************************************
 * ### Promise
 ****************************************************************************************************
 */
function promiseFetchUser() {
  return new Promise((resolve) => {
    // do net work request in 10 secs...
    resolve('jisung')
  })
}

const promiseUser = promiseFetchUser()
promiseUser.then((value) => console.log(`promiseUser.then() value is ${value}`))
console.log('c.log ## promiseUser ##', promiseUser)

/**
 ****************************************************************************************************
 * ### async
 ****************************************************************************************************
 * Clear style of using promise
 * Syntactic sugar
 */
async function asyncFetchUser() {
  // do net work request in 10 secs...
  return 'jisung'
}

const asyncUser = asyncFetchUser()
asyncUser.then((value) => console.log(`asyncUser.then() value is ${value}`))
console.log('c.log ## asyncUser ##', asyncUser)

/**
 ****************************************************************************************************
 * ### await - it can only be used inside functions with 'async'
 ****************************************************************************************************
 * Clear style of using promise
 * Syntactic sugar
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000)
  // throw 'error'
  return 'apple'
}

// function getBanana() {
//   return delay(3000).then(() => 'banana')
// }

async function getBanana() {
  await delay(1000)
  return 'banana'
}

// promise chaining
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`)
  })
}
pickFruits().then((value) => {
  console.log('c.log ## pickFruits valuse is ##', value)
})

// 2
// Sequential execution and lack of concurrency
async function asyncPickFruits() {
  const apple = await getApple()
  const banana = await getBanana()
  return `${apple} + ${banana}`
}

asyncPickFruits().then((value) => {
  console.log('c.log ## asyncPickFruits valuse is ##', value)
})

// 3
// Concurrent execution but code is so dirty
async function asyncDirtyPickFruits() {
  const applePromise = getApple()
  const bananaPromise = getBanana()
  const apple = await applePromise
  const banana = await bananaPromise
  return `${apple} + ${banana}`
}

asyncDirtyPickFruits().then((value) => {
  console.log('c.log ## asyncDirtyPickFruits valuse is ##', value)
})

// So we use Promise APIs(Promise.all, Promise.race)
// Promise.all
function promiseAllPickFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  )
}

promiseAllPickFruits().then((value) => {
  console.log('c.log ## promiseAllPickFruits valuse is ##', value)
})

// Promise.race
function promiseRacePickFruits() {
  return Promise.race([getApple(), getBanana()])
}

promiseRacePickFruits().then((value) => {
  console.log('c.log ## promiseRacePickFruits valuse is ##', value)
})
