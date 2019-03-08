/**
 * *Module Wrapper Function
 * *(function (exports, require, module, __filename, __dirname) {
 * *})
 */

//! console.log(__dirname, __filename);//show names of folder and file

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name}. I am ${this.age}.`);
  }
}

module.exports = Person;
