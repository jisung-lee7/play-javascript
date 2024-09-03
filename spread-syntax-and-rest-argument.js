/**
 ****************************************************************************************************
 * ### Spread Syntax
 ****************************************************************************************************
 */
console.log(`\n[ Spread Syntax ]`)

{
  // // using spread syntax in array
  // const arr1 = [1, 2, 3]
  // const arr2 = [...arr1, 4, 5, 6]
  //
  // console.log(arr2) // Expected output: [1, 2, 3, 4, 5, 6]
}

{
  // // using spread syntax in string
  // const str = 'Hello'
  // const characters = [...str]
  //
  // console.log(characters) // Expected output: ['H', 'e', 'l', 'l', 'o']
}

{
  // // using spread syntax in object
  // const obj1 = { a: 1, b: 2 }
  // const obj2 = { ...obj1, c: 3 }
  //
  // console.log(obj2) // Expected output: { a: 1, b: 2, c: 3 }
}

{
  // // using spread syntax in object merging
  // const obj1 = { a: 1, b: 2 }
  // const obj2 = { d: 3, e: 4 }
  // const obj3 = { ...obj1, ...obj2 }
  //
  // console.log(obj3) // Expected output: { a: 1, b: 2, d: 4, e: 5 }
}

{
  // // using spread syntax in function calls
  // const arr = [1, 2]
  //
  // function test(one, two, three) {
  //   console.log(one, two, three)
  // }
  //
  // test(...arr) // Expected output: [1, 2, undefined]
}

// object copy
{
  // const obj1 = { key: 'key1' }
  // const obj3 = { ...obj1 }
  //
  // console.log(`c.log ## obj1 ##`, obj1)
  // console.log(`c.log ## obj3 ##`, obj3)
}

{
  // // array concatenation
  // const fruits1 = ['peach', 'strawberry']
  // const fruits2 = ['banana', 'kiwi']
  // const fruits = [...fruits1, ...fruits2]
  // console.log(`c.log ## fruits ##`, fruits)
  //
  // // object merge
  // // Note: If keys are the same, they will be overwritten.
  // const dog1 = { dog1: 'dog1Value' }
  // const dog2 = { dog2: 'dog2Value' }
  // const dog = { ...dog1, ...dog2 }
  // console.log(`c.log ## dog ##`, dog)
}

/**
 ****************************************************************************************************
 * ### Spread Syntax
 ****************************************************************************************************
 */
{
  // const arr1 = [1, 2, 3]
  // const arr2 = [4, 5, 6]
  //
  // // using rest argument in function
  // function test(ONE, TWO, ...rest) {
  //   console.log(ONE) // Expected output: one
  //   console.log(TWO) // Expected output: two
  //   console.log(rest) // Expected output: [1, 2, 3, 4, 5, 6]
  // }
  //
  // test('one', 'two', ...arr1, ...arr2) // spread syntax
}
