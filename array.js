'use strict'

/**
 ****************************************************************************************************
 * ### Declaration
 ****************************************************************************************************
 */
const makeNewArray1 = new Array()
const makeNewArray2 = [1, 2]

/**
 ****************************************************************************************************
 * ### Index position
 ****************************************************************************************************
 */
const fruits = ['apple', 'banana']
console.log('c.log ## fruits ##', fruits)
console.log('c.log ## fruits.length ##', fruits.length)
console.log('c.log ## fruits[0] ##', fruits[0])
console.log('c.log ## fruits[1] ##', fruits[1])
console.log('c.log ## fruits[2] ##', fruits[2])

/**
 ****************************************************************************************************
 * ### Looping over an array
 ****************************************************************************************************
 */
// print all fruits
// for
for (let i = 0; i < fruits.length; i++) {
  console.log(`c.log ## use for / fruits[${i}] ##`, fruits[i])
}

// for of
for (const fruit of fruits) {
  console.log('c.log ## use for of / fruit ##', fruit)
}

// forEach
fruits.forEach((fruit) => {
  console.log('c.log ## use forEach / fruit ##', fruit)
})

/**
 ****************************************************************************************************
 * ### Addition, deletion, copy
 ****************************************************************************************************
 */
// push: add an item to the end
fruits.push('strawberry', 'peach')
console.log('c.log ## use push / fruits ##', fruits)

// pop: add an item to the end
fruits.pop()
fruits.pop()
console.log('c.log ## use pop / fruits ##', fruits)

// shift unshift are slower then pop, push
// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon')
console.log('c.log ## use unshift / fruits ##', fruits)

// shift: remove an item from the beginning
fruits.shift()
fruits.shift()
console.log('c.log ## use shift / fruits ##', fruits)

// splice: remove an item by index position
// org array is NOT preserved
fruits.push('strawberry', 'peach', 'lemon')
console.log('c.log ## use push / fruits ##', fruits)
fruits.splice(1, 1)
console.log('c.log ## use splice / fruits ##', fruits)
fruits.splice(1, 1, 'melon', 'watermelon')
console.log('c.log ## use splice / fruits ##', fruits)

// combine two arrays
const fruitsTemp = ['coconut']
const newFruits = fruits.concat(fruitsTemp)
console.log('c.log ## newFruits ##', newFruits)

// searching
// indexOf: find the index
console.log('c.log ## fruits ##', fruits)
console.log()
console.log("c.log ## fruits.indexOf('apple') ##", fruits.indexOf('apple'))
console.log("c.log ## fruits.indexOf('lemon') ##", fruits.indexOf('lemon'))

// includes
console.log(
  'c.log ## fruits.includes watermelon ##',
  fruits.includes('watermelon')
)
console.log(
  'c.log ## fruits.includes blueberry ##',
  fruits.includes('blueberry')
)

// lastindexOf
console.log('c.log ## fruits before push ##', fruits)
fruits.push('apple')
console.log('c.log ## fruits after push ##', fruits)
console.log('c.log ## fruits.indexOf apple ##', fruits.indexOf('apple'))
console.log('c.log ## fruits.lastIndexOf apple ##', fruits.lastIndexOf('apple'))

const arrJoinTest = ['A', 'B', 'C']
const resultJoin = arrJoinTest.join()
console.log('c.log ## resultJoin ##', resultJoin)

const strSplit = 'A, B, C, D'
const resultSplit = strSplit.split(',')
console.log('c.log ## resultSplit ##', resultSplit)

// reverse - org array is NOT preserved
const arrReverse = [1, 2, 3, 4, 5]
console.log('c.log ## arrReverse ##', arrReverse)
const resultReverse = arrReverse.reverse()
console.log('c.log ## resultReverse ##', resultReverse)
console.log('c.log ## arrReverse ##', arrReverse)

const arrSlice = [1, 2, 3, 4, 5]
console.log('c.log ## arrSlice ##', arrSlice)
const resultSlice = arrSlice.slice(2, 5)
console.log('c.log ## resultSlice ##', resultSlice)
console.log('c.log ## arrSlice ##', arrSlice)

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}
const students = [
  new Student('A', 10, true, 10),
  new Student('B', 20, false, 20),
  new Student('C', 30, true, 30),
  new Student('D', 40, false, 90),
  new Student('E', 50, true, 40)
]

// find
const resultFind = students.find((student) => student.score === 90)
console.log('c.log ## resultFind ##', resultFind)

// filter
const resultFilter = students.filter((student) => {
  return student.enrolled === true
})
console.log('c.log ## resultFilter ##', resultFilter)

// map
const resultMap = students.map((student) => {
  return student.score * 2
})
console.log('c.log ## resultMap ##', resultMap)

// some
const resultSome = students.some((student) => {
  return student.score < 50
})
console.log('c.log ## resultSome ##', resultSome)

// every
const resultEvery = !students.every((student) => {
  return student.score >= 50
})
console.log('c.log ## resultEvery ##', resultEvery)

// reduce
const resultReduce = students.reduce((prev, curr) => {
  return prev + curr.score
}, 0)
console.log('c.log ## resultReduce ##', resultReduce)

const result1 = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join()
console.log('c.log ## result1 ##', result1)

const result2 = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join()
console.log('c.log ## result2 ##', result2)

// Quiz
const items = [1, 2, 3, 4, 5, 6]
{
  const result = items.reduce((accu, curr) => {
    if (curr % 2 === 0) {
      return accu + curr * 4
    } else {
      return accu
    }
  }, 0)
  console.log('c.log ## result ##', result)
}
{
  const result = items
    .filter((item) => item % 2 === 0)
    .map((item) => item * 4)
    .reduce((accu, curr) => accu + curr, 0)
  console.log('c.log ## result ##', result)
}

// Remove duplicates
const array = ['dog1', 'cat1', 'cat2', 'dog1', 'dog2', 'cat1']
console.log([...new Set(array)])
