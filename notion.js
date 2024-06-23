/**
 ****************************************************************************************************
 * ### Closure
 ****************************************************************************************************
 * Dictionary definition
   : A combination of a function and the lexical environment in which it was declared
 * When a function is declared inside another function, it remembers the external environment at the time of declaration
 * When a function is declared, the lexical environment stores two pieces of information.
 *   1. Execution context record of the function
 *   2. Outer reference information
 * When use the closure?
 *   1. Data encaptulation/private
 *   2. State maintenance
 *   3. Functional Programming, currying
 */
console.log(`\n[ Closure ]`)

{
  // In JavaScript, every function is provided with a lexical environment.
  let y = 100
  function fn() {
    let x = 10
    console.log(`c.log ## x ##`, x)
    console.log(`c.log ## y ##`, y)
  }

  fn()
}

{
  function outer() {
    console.log(`c.log ## outer ##`, outer)
    let x = 10
    function inner() {
      console.log(`c.log ## inner ##`, inner)
      console.log(`c.log ## x ##`, x)
    }
    return inner
  }

  const fn = outer()

  console.log(`c.log ## fn(outer()) done ##`)

  fn() // inner
}

{
  let one
  one = 1

  function addOne(num) {
    console.log(`c.log ## one + num ##`, one + num)
  }

  addOne(5)
}

{
  function makeAdder(x) {
    return function (y) {
      return x + y
    }
  }
  const add3 = makeAdder(3)
  console.log(`c.log ## add3(2) ##`, add3(2))

  const add10 = makeAdder(10)
  console.log(`c.log ## add10(5) ##`, add10(5))
  console.log(`c.log ## add3(1) ##`, add3(1))
}

{
  function makeCounter() {
    let num = 0
    return function () {
      return num++
    }
  }

  let counter = makeCounter()
  console.log(`c.log ## counter() ##`, counter())
  console.log(`c.log ## counter() ##`, counter())
  console.log(`c.log ## counter() ##`, counter())
}
