// ES6
/**
 ****************************************************************************************************
 * ### Shorthand property names
 ****************************************************************************************************
 */
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
 */
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
{
  const obj1 = { key: 'key1' }
  const obj2 = { key: 'key2' }
  const array = [obj1, obj2]

  // array copy(shallow copy)
  const arrayCopy = [...array]

  console.log(`c.log ## array ##`, array)
  console.log(`c.log ## arrayCopy ##`, arrayCopy)

  const arrayCopy2 = [...array, { key: 'key3' }]
  obj1.key = 'newKey'
  console.log(`c.log ## arrayCopy ##`, arrayCopy2)
  console.log(`c.log ## arrayCopy2 ##`, arrayCopy2)

  // object copy
  const obj3 = { ...obj1 }
  console.log(`c.log ## obj3 ##`, obj3)

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
