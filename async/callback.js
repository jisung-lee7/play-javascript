'use strict'

/**
 ****************************************************************************************************
 * ### callback
 ****************************************************************************************************

 * JavaScript is synchronous.
 * Execute the code block in order after hoisting.
 * Synchronous : Excute code in order
 * Asynchronous : Unpredictable when code will run
 */

console.log('1')
setTimeout(() => console.log('2'), 1000)
console.log('3')

/**
 ****************************************************************************************************
 * ### Synchronous callback
 ****************************************************************************************************
 */
function printImmediately(print) {
  print()
}

printImmediately(() => console.log('hello'))

/**
 ****************************************************************************************************
 * ### Asynchronous callback
 ****************************************************************************************************
 */
function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000)

/**
 ****************************************************************************************************
 * ### Callback Hell example
 ****************************************************************************************************
 */
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'jisung' && password === 'lee') {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jisung') {
        onSuccess({ name: 'jisung', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}
const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        )
      },

      (error) => {
        console.log(error)
      }
    )
  },
  (error) => {
    console.log(error)
  }
)
