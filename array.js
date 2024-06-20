'use strict'

/**
 ****************************************************************************************************
 * ### Declaration
 ****************************************************************************************************
 */
console.log(`\n[ Declaration ]`)

const makeNewArray1 = new Array()
const makeNewArray2 = [1, 2]
const arr = [
  // An array can include string, number, object, function
  'Jisung',
  7,
  true,
  {
    name: 'Lee',
    age: '30'
  },
  function () {
    console.log(`TEST`)
  }
]

/**
 ****************************************************************************************************
 * ### Index position
 ****************************************************************************************************
 */
console.log(`\n[ Index position ]`)

{
  const fruits = ['apple', 'banana']

  console.log(`c.log ## fruits ##`, fruits)
  console.log(`c.log ## fruits.length ##`, fruits.length)
  console.log(`c.log ## fruits[0] ##`, fruits[0])
  console.log(`c.log ## fruits[1] ##`, fruits[1])
  console.log(`c.log ## fruits[2] ##`, fruits[2])
}

/**
 ****************************************************************************************************
 * ### Looping over an array
 ****************************************************************************************************
 */
console.log(`\n[ Looping over an array ]`)

{
  const fruits = ['apple', 'banana']

  // print all fruits
  // for
  for (let i = 0; i < fruits.length; i++) {
    console.log(`c.log ## use for / fruits[${i}] ##`, fruits[i])
  }

  // for of
  for (const fruit of fruits) {
    console.log(`c.log ## use for of / fruit ##`, fruit)
  }

  // forEach
  fruits.forEach((fruit) => {
    console.log(`c.log ## use forEach / fruit ##`, fruit)
  })
}

/**
 ****************************************************************************************************
 * ### Array methods
 ****************************************************************************************************
 */
console.log(`\n[ Addition, deletion, copy ]`)

{
  const fruits = ['apple', 'banana']

  // arr.push() - add an item to the end
  fruits.push('strawberry', 'peach')

  console.log(`c.log ## use push / fruits ##`, fruits)

  // arr.pop() - add an item to the end
  fruits.pop()
  fruits.pop()

  console.log(`c.log ## use pop / fruits ##`, fruits)
}

{
  const fruits = ['apple', 'banana']

  // shift unshift are slower then pop, push
  // arr.unshift() - add an item to the beginning
  fruits.unshift('strawberry', 'lemon')
  console.log(`c.log ## use unshift / fruits ##`, fruits)

  // arr.shift() - remove an item from the beginning
  fruits.shift()
  fruits.shift()
  console.log(`c.log ## use shift / fruits ##`, fruits)
}

{
  const fruits = ['apple', 'banana']

  // arr.splice: remove an item by index position
  // org array is NOT preserved
  fruits.push('strawberry', 'peach', 'lemon')
  console.log(`c.log ## use push / fruits ##`, fruits)

  console.log(`c.log ## fruits.splice(1, 1) ##`, fruits.splice(1, 1))

  fruits.splice(1, 1, 'melon', 'watermelon')
  console.log(`c.log ## use splice / fruits ##`, fruits)

  // arr.concat() - combine two arrays
  const fruitsTemp = ['coconut']
  const newFruits = fruits.concat(fruitsTemp)
  console.log(`c.log ## newFruits ##`, newFruits)

  const arr = [1, 2]

  console.log(`c.log ## arr.concat([3, 4]) ##`, arr.concat([3, 4]))
  console.log(
    `c.log ## arr.concat([3, 4], [5, 6]) ##`,
    arr.concat([3, 4], [5, 6])
  )
  console.log(`c.log ## arr.concat([3, 4], 5, 6) ##`, arr.concat([3, 4], 5, 6))
}

{
  const fruits = ['apple', 'melon', 'watermelon', 'peach', 'lemon']

  // arr.indexOf(): find the index
  console.log("c.log ## fruits.indexOf('apple') ##", fruits.indexOf('apple'))
  console.log("c.log ## fruits.indexOf('lemon') ##", fruits.indexOf('lemon'))

  // arr.includes()
  console.log(
    'c.log ## fruits.includes watermelon ##',
    fruits.includes('watermelon')
  )

  console.log(
    'c.log ## fruits.includes blueberry ##',
    fruits.includes('blueberry')
  )
}

{
  const fruits = ['apple', 'melon', 'watermelon', 'peach', 'lemon', 'apple']

  // arr.lastIndexOf()
  console.log(`c.log ## fruits.indexOf('apple') ##`, fruits.indexOf('apple'))
  console.log(
    `c.log ## fruits.lastIndexOf('apple') ##`,
    fruits.lastIndexOf('apple')
  )
}

{
  // arr.join()
  const arrJoinTest = ['A', 'B', 'C']
  const resultJoin = arrJoinTest.join()

  console.log(`c.log ## resultJoin ##`, resultJoin)
}

{
  // str.split() - return array
  const strSplit = 'A, B, C, D'
  const resultSplit = strSplit.split(',')

  console.log(`c.log ## resultSplit ##`, resultSplit)
}

{
  // arr.reverse() - org array is NOT preserved
  const arrReverse = [1, 2, 3, 4, 5]
  console.log(`c.log ## arrReverse ##`, arrReverse)

  const resultReverse = arrReverse.reverse()
  console.log(`c.log ## resultReverse ##`, resultReverse)
  console.log(`c.log ## arrReverse ##`, arrReverse)
}

{
  // arr.slice()
  const arrSlice = [1, 2, 3, 4, 5]
  console.log(`c.log ## arrSlice ##`, arrSlice)

  const resultSlice = arrSlice.slice(2, 5)
  console.log(`c.log ## resultSlice ##`, resultSlice)
  console.log(`c.log ## arrSlice ##`, arrSlice)
}

{
  // arr.sort()
  const arr = [1, 5, 4, 2, 3]
  console.log(`c.log ## arr before arr.sort() ##`, arr)

  arr.sort()
  console.log(`c.log ## arr after arr.sort() ##`, arr)
}

{
  // arr.sort()
  const arr = [27, 8, 5, 13]
  console.log(`c.log ## arr before arr.sort() ##`, arr)

  arr.sort()
  console.log(`c.log ## arr after arr.sort() ##`, arr) // [13, 27, 5, 8] - The reason is string

  arr.sort((a, b) => {
    return a - b
  })

  console.log(`c.log ## arr after arr.sort(fn) ##`, arr)
}

{
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

  // arr.find()
  const resultFind = students.find((student) => student.score === 90)
  console.log(`c.log ## resultFind ##`, resultFind)

  // arr.findIndex()
  const resultFindIndex = students.findIndex((student) => student.score === 90)
  console.log(`c.log ## resultFindIndex ##`, resultFindIndex)

  // arr.filter()
  const resultFilter = students.filter((student) => {
    return student.enrolled === true
  })

  console.log(`c.log ## resultFilter ##`, resultFilter)

  // arr.map()
  const resultMap = students.map((student) => {
    return student.score * 2
  })

  console.log(`c.log ## resultMap ##`, resultMap)

  // arr.some()
  const resultSome = students.some((student) => {
    return student.score < 50
  })

  console.log(`c.log ## resultSome ##`, resultSome)

  // arr.every()
  const resultEvery = !students.every((student) => {
    return student.score >= 50
  })

  console.log(`c.log ## resultEvery ##`, resultEvery)

  // arr.reduce()
  const resultReduce = students.reduce((prev, cur) => {
    return prev + cur.score
  }, 0)

  console.log(`c.log ## resultReduce ##`, resultReduce)

  const result1 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join()

  console.log(`c.log ## result1 ##`, result1)

  const result2 = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join()

  console.log(`c.log ## result2 ##`, result2)
}

// arr.reduce()
{
  const userList = [
    {
      name: 'Jisung',
      age: 10
    },
    {
      name: 'Mike',
      age: 20
    },
    {
      name: 'Tom',
      age: 30
    },
    {
      name: 'Harry',
      age: 40
    },
    {
      name: 'Steve',
      age: 50
    }
  ]

  const result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
      prev.push(cur.name)
    }
    return prev
  }, [])
  console.log(`c.log ## result ##`, result)
}

// Array.isArray()
{
  const userObj = {
    name: 'Jisung',
    age: 30
  }

  const userArray = ['Jisung', 'Jenny', 'Tom']

  console.log(`c.log ## typeof userObj ##`, typeof userObj)
  console.log(`c.log ## typeof userArray ##`, typeof userArray)

  console.log(`c.log ## Array.isArray(userObj) ##`, Array.isArray(userObj))
  console.log(`c.log ## Array.isArray(userArray) ##`, Array.isArray(userArray))
}

// Quiz
const items = [1, 2, 3, 4, 5, 6]
{
  const result = items.reduce((accu, cur) => {
    if (cur % 2 === 0) {
      return accu + cur * 4
    } else {
      return accu
    }
  }, 0)

  console.log(`c.log ## result ##`, result)
}
{
  const result = items
    .filter((item) => item % 2 === 0)
    .map((item) => item * 4)
    .reduce((accu, cur) => accu + cur, 0)

  console.log(`c.log ## result ##`, result)
}

// Remove duplicates
const array = ['dog1', 'cat1', 'cat2', 'dog1', 'dog2', 'cat1']

console.log([...new Set(array)])
