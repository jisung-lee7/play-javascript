/**
 ****************************************************************************************************
 * ### async & await
 ****************************************************************************************************

 * clear style of using promise
 */

/**
 ****************************************************************************************************
 * ### async
 ****************************************************************************************************
 */
// 1.1 Promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do net work request in 10 secs...
    return 'jisung'
  })
}

// 1.2 async
async function fetchUser() {
  // do net work request in 10 secs...
  return 'jisung'
}

const user = fetchUser()
user.then(console.log)
console.log(user)

// 2. await - it can only be used inside functions with 'async'
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000)
  return 'apple'
}

// function getBanana() {
//   return delay(3000).then(() => 'banana')
// }

async function getBanana() {
  await delay(1000)
  return 'banana'
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     getBanana().then((banana) => `${apple} + ${banana}`)
//   })
// }

// 병렬처리 불가
// async function pickFruits() {
//   const apple = await getApple()
//   const banana = await getBanana()
//   return `${apple} + ${banana}`
// }

// 병렬처리 가능 but code 더러움
// async function pickFruits() {
//   const applePromise = getApple()
//   const bananaPromise = getBanana()
//   const apple = await applePromise
//   const banana = await bananaPromise
//   return `${apple} + ${banana}`
// }

// pickFruits().then(console.log)

// // 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  )
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)
