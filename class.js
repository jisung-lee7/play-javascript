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

/**
 ****************************************************************************************************
 * ### Class declaration
 ****************************************************************************************************
 */
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

/**
 ****************************************************************************************************
 * ### Getter and setters
 ****************************************************************************************************
 */
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

/**
 ****************************************************************************************************
 * ### Fields (public, private)
 ****************************************************************************************************
 */
class Experiment {
  publicField = 2
  #privateField = 0
}

const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateField)

/**
 ****************************************************************************************************
 * ### Static properties and methods
 ****************************************************************************************************
 */
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

/**
 ****************************************************************************************************
 * ### Inheritance
 ****************************************************************************************************
 * A way for one class to extend another class.
 */
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

/**
 ****************************************************************************************************
 * ### Class checking: instanceOf
 ****************************************************************************************************
 */
console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)
