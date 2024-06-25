'use strict'

/**
 ****************************************************************************************************
 * ### Object-oriented programming
 ****************************************************************************************************
 * class: template
 * object: instance of a class
 * JavaScript classes
   - Introduced in ES6
   - Syntactical sugar over prototype-based inheritance
 */
console.log(`\n[ Object-oriented programming ]`)

/**
 ****************************************************************************************************
 * ### Class declaration
 ****************************************************************************************************
 */
console.log(`\n[ Class declaration ]`)

{
  // constructor function
  const User = function (name, age) {
    this.name = name
    this.age = age
    // this.showName = function () {
    //   // create in object
    //   console.log(`c.log ## this.name ##`, this.name)
    // }

    // like class
    User.prototype.showName = function () {
      console.log(`c.log ## this.name ##`, this.name)
    }
  }

  const jisung = new User('Jisung', 30)
  console.log(`c.log ## use constructor function jisung ##`, jisung)
  jisung.showName()

  for (const objTest in jisung) {
    console.log(`c.log ## objTest ##`, objTest)
  }
}

{
  // class
  class User {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    showName() {
      // create in __proto__
      console.log(`c.log ## this.name ##`, this.name)
    }
  }
  const jisung = new User('jisung', 19)
  console.log(`c.log ## use class jisung ##`, jisung)
  jisung.showName()

  for (const objTest in jisung) {
    console.log(`c.log ## objTest ##`, objTest)
  }
}

{
  class Person {
    // constructor
    constructor(name, age) {
      // field
      this.name = name
      this.age = age
    }

    // methods
    speak() {
      console.log(`${this.name}: hello!`)
    }
  }

  const jisung = new Person('jisung', 30)
  console.log(`jisung.name:`, jisung.name)
  console.log(`jisung.age:`, jisung.age)
  jisung.speak()
}

/**
 ****************************************************************************************************
 * ### Getter and setters
 ****************************************************************************************************
 */
console.log(`\n[ Getter and setters ]`)

{
  class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }

    get age() {
      return this._age
    }

    set age(value) {
      // if (value < 0) {
      //   throw Error('age can not be negative')
      // }
      this._age = value < 0 ? 0 : value
    }
  }

  const user1 = new User('Jisung', 'Lee', -1)
  console.log(`user1.age`, user1.age)
}

/**
 ****************************************************************************************************
 * ### Fields (public, private)
 ****************************************************************************************************
 */
console.log(`\n[ Fields (public, private) ]`)

{
  class Experiment {
    publicField = 2
    #privateField = 0
  }

  const experiment = new Experiment()
  console.log(experiment.publicField)
  console.log(experiment.privateField)
}

/**
 ****************************************************************************************************
 * ### Static properties and methods
 ****************************************************************************************************
 */
console.log(`\n[ Static properties and methods ]`)

{
  class Article {
    static publisher = 'Coding for fun'
    constructor(articleNumber) {
      this.articleNumber = articleNumber
    }
    static printPublisher() {
      console.log(Article.publisher)
    }
  }

  const article1 = new Article(1)
  const article2 = new Article(2)
  console.log(Article.publisher)
  Article.printPublisher()
}

/**
 ****************************************************************************************************
 * ### Inheritance (extendsds)
 ****************************************************************************************************
 * A way for one class to extend another class.
 */
console.log(`\n[ Inheritance ]`)

{
  class Car {
    constructor(color) {
      this.color = color
      this.wheels = 4
    }
    drive() {
      console.log(`c.log ## run drive().. ##`)
    }
    stop() {
      console.log(`c.log ## run stop().. ##`)
    }
  }

  class Bmw extends Car {
    lee() {
      console.log(`c.log ## lee ##`, lee)
    }
  }

  const z4 = new Bmw('blue')
  console.log(`c.log ## z4 ##`, z4)
}

{
  // method overriding
  class Car {
    constructor(color) {
      this.color = color
      this.wheels = 4
    }
    drive() {
      console.log(`c.log ## run drive().. ##`)
    }
    stop() {
      console.log(`c.log ## run stop of Car().. ##`)
    }
  }

  class Bmw extends Car {
    lee() {
      console.log(`c.log ## lee ##`, lee)
    }
    stop() {
      super.stop() // if you want use parents method
      console.log(`c.log ## run stop of Bmw().. ##`)
    }
  }

  const z4 = new Bmw('blue')
  z4.stop()
}

{
  // constructor overriding
  class Car {
    constructor(color) {
      this.color = color
      this.wheels = 4
    }
    drive() {
      console.log(`c.log ## run drive().. ##`)
    }
    stop() {
      console.log(`c.log ## run stop of Car().. ##`)
    }
  }

  class Bmw extends Car {
    constructor(color) {
      super(color)
      this.navigation = 1
    }
    lee() {
      console.log(`c.log ## lee ##`, lee)
    }
  }

  const z4 = new Bmw('blue')
  console.log(`c.log ## z4 ##`, z4)
}

{
  class Shape {
    constructor(width, height, color) {
      this.width = width
      this.height = height
      this.color = color
    }

    draw() {
      console.log(`drawing ${this.color} color!`)
    }

    getArea() {
      return this.width * this.height
    }
  }

  class Rectangle extends Shape {}
  class Triangle extends Shape {
    draw() {
      super.draw()
      console.log(`small_red_triangle`)
    }
    getArea() {
      return (this.width * this.height) / 2
    }
  }

  const rectangle = new Rectangle(20, 20, 'blue')
  rectangle.draw()
  console.log(rectangle.getArea())

  const triangle = new Triangle(20, 20, 'red')
  triangle.draw()
  console.log(triangle.getArea())
}

/**
 ****************************************************************************************************
 * ### Class checking: instanceOf
 ****************************************************************************************************
 */
console.log(`\n[ Class checking: instanceOf ]`)
{
  class Shape {
    constructor(width, height, color) {
      this.width = width
      this.height = height
      this.color = color
    }

    draw() {
      console.log(`drawing ${this.color} color!`)
    }

    getArea() {
      return this.width * this.height
    }
  }

  class Rectangle extends Shape {}
  class Triangle extends Shape {
    draw() {
      super.draw()
      console.log(`small_red_triangle`)
    }
    getArea() {
      return (this.width * this.height) / 2
    }
  }

  const rectangle = new Rectangle(20, 20, 'blue')
  const triangle = new Triangle(20, 20, 'red')

  console.log(
    `c.log ## rectangle instanceof Rectangle ##`,
    rectangle instanceof Rectangle
  )
  console.log(
    `c.log ## triangle instanceof Rectangle ##`,
    triangle instanceof Rectangle
  )
  console.log(
    `c.log ## triangle instanceof Triangle ##`,
    triangle instanceof Triangle
  )
  console.log(
    `c.log ## triangle instanceof Shape ##`,
    triangle instanceof Shape
  )
  console.log(
    `c.log ## triangle instanceof Object ##`,
    triangle instanceof Object
  )

  console.log(
    `c.log ## rectangle.constructor === Rectangle ##`,
    rectangle.constructor === Rectangle
  )
}
