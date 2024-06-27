/**
 ****************************************************************************************************
 * ### Generator
 ****************************************************************************************************
 * A feature that allows pausing and resuming the execution of a function.
 * Generators do not pre-create values.
 * They are efficient in terms of memory management, and they perform computations at the moment they are needed.
 * It has functions that include 'next()', 'return()', 'throw()'
 * Generator is an iterable object.
 * Iterable
 *   - It has method that 'Symbol.iterator'.
 *   - Symbol.iterator have to return an iterator.
 * Iterator
 *   - It has method that 'next'.
 *   - The ‘next’ method returns an object with properties ‘value’ and ‘done’.
 *   - When the task is finished, done become true.
 */
console.log(`\n[ Generator ]`)

function* fn() {
  try {
    console.log(`c.log ## one ##`)
    yield 1
    console.log(`c.log ## two ##`)
    yield 2
    console.log(`c.log ## three ##`)
    console.log(`c.log ## four ##`)
    yield 3
    return 'finish'
  } catch (error) {
    console.log(`c.log ## error ##`, error)
  }
}

const a = fn()

// An array is an iterable object.
const arr = [1, 2, 3, 4, 5]
console.log(`c.log ## arr ##`, arr)

const it = arr[Symbol.iterator]()
console.log(`c.log ## it ##`, it)

for (let num of arr) {
  console.log(`c.log ## num ##`, num)
}

function* fn() {
  yield 4
  yield 5
  yield 6
}

const b = fn()
console.log(
  `c.log ## b[Symbol.iterator]() === b ##`,
  b[Symbol.iterator]() === b
)

for (let num of b) {
  console.log(`c.log ## num ##`, num)
}

// A string is an iterable object.
const str = 'hello'

const xx = str[Symbol.iterator]()

for (let str of xx) {
  console.log(`c.log ## str ##`, str)
}

function* gen1() {
  yield 'W'
  yield 'o'
  yield 'r'
  yield 'l'
  yield 'd'
}

function* gen2() {
  yield 'Hello,'
  yield* gen1()
  yield '!'
}

console.log(`c.log ## gen2() ##`, ...gen2())
