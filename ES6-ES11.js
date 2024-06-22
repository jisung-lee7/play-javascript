// ES6
/**
 ****************************************************************************************************
 * ### Shorthand property names
 ****************************************************************************************************
 */
console.log(`\n[ Shorthand property names ]`)

{
  const objName = 'Jisung'
  const objAge = '10'

  // const jisung = {
  //   objName: objName,
  //   objAge: objAge
  // }

  const jisung = {
    objName,
    objAge
  }

  console.log(`objName=${jisung.objName}, objAge=${jisung.objAge}`)
}

/**
 ****************************************************************************************************
 * ### Destructuring assignment
 ****************************************************************************************************
 * Desturcturing assignment syntax is an expression that allows you to unpack values from arrays or properties from objects into variables.
 */
console.log(`\n[ Destructuring assignment ]`)

{
  const student = {
    name: 'Kay',
    level: 7
  }

  {
    const name = student.name
    const level = student.level
    console.log(`name=${name}, level=${level}`)
  }

  {
    const { name, level } = student
    console.log(`name=${name}, level=${level}`)

    const { name: studentName, level: studentLevel } = student
    console.log(`studentName=${studentName}, studentLevel=${studentLevel}`)
  }

  const animals = ['dog', 'cat']

  {
    const first = animals[0]
    const second = animals[1]
    console.log(`first=${first}, second=${second}`)
  }

  {
    const [first, second] = animals
    console.log(`first=${first}, second=${second}`)
  }
}

/**
 ****************************************************************************************************
 * ### Spread Syntax
 ****************************************************************************************************
 */
console.log(`\n[ Spread Syntax ]`)

{
  // Array copy
  const obj1 = { key: 'key1' }
  const obj2 = { key: 'key2' }
  const array = [obj1, obj2]
  console.log(`c.log ## array ##`, array)

  const arrayCopy = [...array]
  console.log(`c.log ## arrayCopy ##`, arrayCopy)

  const arrayCopy2 = [...array, { key: 'key3' }]
  console.log(`c.log ## arrayCopy2 ##`, arrayCopy2)
}

// Array copy(Shallow copy)
{
  const obj1 = { key: 'key1' }
  const obj2 = { key: 'key2' }

  const array = [obj1, obj2]
  const arrayCopy = [...array]

  obj1.key = 'newKey'

  console.log(`c.log ## array(Shallow copy) ##`, array)
  console.log(`c.log ## arrayCopy(Shallow copy) ##`, arrayCopy)
}

// Array copy(Deep copy)
{
  function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    if (Array.isArray(obj)) {
      let arrCopy = []
      obj.forEach((item, index) => {
        arrCopy[index] = deepCopy(item)
      })
      return arrCopy
    }

    let objCopy = {}
    Object.keys(obj).forEach((key) => {
      objCopy[key] = deepCopy(obj[key])
    })
    return objCopy
  }

  const obj1 = { key: 'key1' }
  const obj2 = { key: 'key2' }

  const array = [obj1, obj2]
  const arrayCopy = deepCopy(array)

  obj1.key = 'newKey'

  console.log(`c.log ## array(Deep copy) ##`, array)
  console.log(`c.log ## arrayCopy(Deep copy) ##`, arrayCopy)
}

// object copy
{
  const obj1 = { key: 'key1' }
  const obj3 = { ...obj1 }

  console.log(`c.log ## obj1 ##`, obj1)
  console.log(`c.log ## obj3 ##`, obj3)
}

{
  // array concatenation
  const fruits1 = ['peach', 'strawberry']
  const fruits2 = ['banana', 'kiwi']
  const fruits = [...fruits1, ...fruits2]
  console.log(`c.log ## fruits ##`, fruits)

  // object merge
  // Note: If keys are the same, they will be overwritten.
  const dog1 = { dog1: 'dog1Value' }
  const dog2 = { dog2: 'dog2Value' }
  const dog = { ...dog1, ...dog2 }
  console.log(`c.log ## dog ##`, dog)
}

/**
 ****************************************************************************************************
 * ### Default parameters
 ****************************************************************************************************
 * Default parameter is only for undefined
 */
console.log(`\n[ Default parameters ]`)

{
  function printMessage(message) {
    console.log(`c.log ## message ##`, message)
  }
  printMessage('hello')
  printMessage() // undefined
}

{
  function printMessage(message = 'default message') {
    console.log(`c.log ## message ##`, message)
  }
  printMessage('hi')
  printMessage()
}

/**
 ****************************************************************************************************
 * ### Ternary operator
 ****************************************************************************************************
 */
console.log(`\n[ Ternary operator ]`)

{
  const isCat = true
  const component = isCat ? 'cat' : 'dog'
  console.log(`c.log ## component ##`, component)
}

// ES11
/**
 ****************************************************************************************************
 * ### Optional chaining
 ****************************************************************************************************
 */
console.log(`\n[ Optional chaining ]`)

{
  const person1 = {
    name: 'Jisung',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob'
      }
    }
  }

  const person2 = {
    name: 'Bob'
  }

  {
    function printManager(person) {
      console.log(person.job.manager.name)
    }
    printManager(person1)
    // printManager(person2) // error
  }

  {
    function printManager(person) {
      console.log(person.job?.manager?.name)
    }
    printManager(person1)
    printManager(person2)
  }
}

/**
 ****************************************************************************************************
 * ### Nullish coalescing operator
 ****************************************************************************************************
 * leftExpr ?? rightExpr
 * null, undefined

 * leftExpr || rightExpr
 * falsy : false, '', "", ``, 0, -0, null, undefined, NaN
 */
console.log(`\n[ Nullish coalescing operator ]`)

{
  const name = 'Jisung'
  const userName = name || 'Guest'
  console.log(`c.log ## userName ##`, userName)
}

{
  const name = null
  const userName = name || 'Guest'
  console.log(`c.log ## userName ##`, userName)
}

// bug
{
  const name = ''
  const userName = name || 'Guest'
  console.log(`c.log ## userName ##`, userName)
}

// bug
{
  const num = 0
  const message = num || 'undefined'
  console.log(`c.log ## message ##`, message)
}

// Nullish coalescing operator
{
  const name = ''
  const userName = name ?? 'Guest'
  console.log(`c.log ## userName ##`, userName)

  const num = 0
  const message = num ?? 'undefined'
  console.log(`c.log ## message ##`, message)
}
