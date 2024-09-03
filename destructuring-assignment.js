/**
 ****************************************************************************************************
 * ### Destructuring assignment
 ****************************************************************************************************
 * Desturcturing assignment syntax is an expression that allows you to unpack values from arrays or properties from objects into variables.
 */
console.log(`\n[ Destructuring assignment ]`)

{
  // // basic destructuring
  // const array = [1, 2]
  // const [a, b, c] = array
  // console.log(a) // Expected output: 1
  // console.log(b) // Expected output: 2
  // console.log(c) // Expected output: undefined
}

{
  // // skipping elements
  // const array = [1, 2, 3]
  // const [a, , b, c] = array
  // console.log(a) // Expected output: 1
  // console.log(b) // Expected output: 3
  // console.log(c) // Expected output: undefined
}

{
  // // default values
  // const array = [undefined, 2]
  // const [a = 10, b, c = 20] = array
  // console.log(a) // Expected output: 10 (use default)
  // console.log(b) // Expected output: 2
  // console.log(c) // Expected output: 20
}

{
  // // rest elements
  // const array = [1, 2, 3, 4, 5]
  // const [a, b, ...rest] = array
  // console.log(a) // Expected output: 1
  // console.log(b) // Expected output: 2
  // console.log(rest) // Expected output: [3, 4, 5]
}

{
  // // rest elements with specific positions
  // const array = [1, 2, 3, 4, 5]
  // const [a, , b, ...rest] = array
  // console.log(a) // Expected output: 1
  // console.log(b) // Expected output: 3
  // console.log(rest) // Expected output: [4, 5]
}

{
  // const animals = ['dog', 'cat']
  //
  // {
  //   const first = animals[0]
  //   const second = animals[1]
  //   console.log(`first=${first}, second=${second}`)
  // }
  //
  // {
  //   const [first, second] = animals
  //   console.log(`first=${first}, second=${second}`)
  // }
  //
  // {
  //   const [first] = animals
  //   console.log(`first=${first}`)
  // }
  //
  // {
  //   const [first, second, third] = animals
  //   console.log(`first=${first}, second=${second}, third=${third}`)
  // }
  //
  // {
  //   const [first, second, third = 3] = animals
  //   console.log(`first=${first}, second=${second}, third=${third}`)
  // }
}

{
  // // basic destructuring
  // const obj = { a: 1, b: 2 }
  // const { a, b, c } = obj
  // console.log(a) // Expected output: 1
  // console.log(b) // Expected output: 2
  // console.log(c) // Expected output: undefined
}

{
  // // renaming variables
  // const obj = { a: 1, b: 2 }
  // const { a: a1, b: b1, c: c1 } = obj
  // console.log(a1) // Expected output: 1
  // console.log(b1) // Expected output: 2
  // console.log(c1) // Expected output: undefined
}

{
  // // default values
  // const obj = { a: undefined, b: 2 }
  // const aDefault = 10
  // const bDefault = 20
  // const { a: a1 = aDefault, b = bDefault, c = 30 } = obj
  // console.log(a1) // Expected output: 10 (use default value)
  // console.log(b) // Expected output: 2
  // console.log(c) // Expected output: 30
}

{
  // // rest properties
  // const obj = { a: 1, b: 2, c: 3, d: 4 }
  // const { a, b, ...rest } = obj
  // console.log(a) // Expected output: 1
  // console.log(b) // Expected output: 2
  // console.log(rest) // Expected output: { c: 3, d: 4 }
}

{
  // // rest properties with renaming
  // const obj = { a: 1, b: 2, c: 3, d: 4 }
  // const { a: a1, b: b1, ...rest } = obj
  // console.log(a1) // Expected output: 1
  // console.log(b1) // Expected output: 2
  // console.log(rest) // Expected output: { c: 3, d: 4 }
}

{
  // // computed property names
  // const obj = { a: 1, b: 2, c: 3 }
  // const key = 'a'
  // const { [key]: a } = obj
  // console.log(a) // Expected output: 1
}

{
  // const student = {
  //   name: 'Kay',
  //   level: 7
  // }
  //
  // {
  //   const name = student.name
  //   const level = student.level
  //   console.log(`name=${name}, level=${level}`)
  // }
  //
  // {
  //   const { name, level } = student
  //   console.log(`name=${name}, level=${level}`)
  //
  //   const { name: studentName, level: studentLevel } = student
  //   console.log(`studentName=${studentName}, studentLevel=${studentLevel}`)
  // }
}

{
  // const person = {
  //   name: 'Jisung',
  //   age: 20,
  //   hobby: 'computer'
  // }
  //
  // const func = ({ name, age, hobby, extra }) => {
  //   console.log(`c.log ## name ##`, name)
  //   console.log(`c.log ## age ##`, age)
  //   console.log(`c.log ## hobby ##`, hobby)
  //   console.log(`c.log ## extra ##`, extra)
  // }
  //
  // func(person)
}
