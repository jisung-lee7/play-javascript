'use strict'

/**
 ****************************************************************************************************
 * ### Callback
 ****************************************************************************************************
 * JavaScript is synchronous.
 * Execute the code block in order after hoisting.
 * Synchronous  : Execute code in order
 * Asynchronous : Unpredictable when code will run
 */

{
  function orderFood(callback) {
    setTimeout(() => {
      const food = 'DDEOK BO KKi'
      callback(food)
    }, 3000)
  }

  function cooldownFood(food, callback2) {
    setTimeout(() => {
      const cooldownedFood = `cooldowned ${food}`
      callback2(cooldownedFood)
    }, 3000)
  }

  function freezeFood(food, callback3) {
    setTimeout(() => {
      const freezFood = `freezed ${food}`
      callback3(freezFood)
    }, 3000)
  }

  orderFood((food) => {
    console.log(food)
    cooldownFood(food, (cooldownedFood) => {
      console.log(cooldownedFood)
      freezeFood(cooldownedFood, (freezFood) => {
        console.log(freezFood)
      })
    })
  })
}

{
  // console.log(`1`)
  // setTimeout(() => console.log(`2`), 1000)
  // console.log(`3`)
}

/**
 ****************************************************************************************************
 * ### Synchronous callback
 ****************************************************************************************************
 */
{
  // // 1. Declare function to be used
  // function printImmediately(callback) {
  //   callback()
  // }
  //
  // {
  //   // 2. Pass to callback function
  //   function callbackTest() {
  //     console.log(`hello`)
  //   }
  //   printImmediately(callbackTest)
  // }
  //
  // {
  //   // 3. remove name of function(modify callbackTest to anonymous)
  //   printImmediately(function () {
  //     console.log(`hello`)
  //   })
  // }
  //
  // {
  //   // 4. modify anonymous to arrow
  //   printImmediately(() => console.log(`hello`))
  // }
}

{
  // function doRepeat(count, callback) {
  //   for (let i = 0; i < count; i++) {
  //     callback(i)
  //   }
  // }
  //
  // doRepeat(3, (i) => {
  //   console.log(i)
  // })
}

/**
 ****************************************************************************************************
 * ### Asynchronous callback
 ****************************************************************************************************
 */
{
  // function printWithDelay(callback, timeout) {
  //   setTimeout(callback, timeout)
  // }
  // printWithDelay(() => console.log(`async callback`), 2000)
}

/**
 ****************************************************************************************************
 * ### Callback Hell example
 ****************************************************************************************************
 */
{
  // class UserStorage {
  //   loginUser(id, password, onSuccess, onError) {
  //     setTimeout(() => {
  //       if (id === 'jisung' && password === 'lee') {
  //         onSuccess(id)
  //       } else {
  //         onError(new Error('not found'))
  //       }
  //     }, 2000)
  //   }
  //
  //   getRoles(user, onSuccess, onError) {
  //     setTimeout(() => {
  //       if (user === 'jisung') {
  //         onSuccess({ name: 'jisung', role: 'admin' })
  //       } else {
  //         onError(new Error('no access'))
  //       }
  //     }, 1000)
  //   }
  // }
  // const userStorage = new UserStorage()
  // console.log(`c.log ## userStorage ##`, userStorage)
  // const id = prompt('enter your id')
  // const password = prompt('enter your password')
  // userStorage.loginUser(
  //   id,
  //   password,
  //   (user) => {
  //     userStorage.getRoles(
  //       user,
  //       (userWithRole) => {
  //         alert(
  //           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
  //         )
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  //   },
  //   (error) => {
  //     console.log(error)
  //   }
  // )
}
