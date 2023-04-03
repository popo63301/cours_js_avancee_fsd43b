const myAnimal = {
  name: "riri",
  age: 3,
  sound: "Roaar",
  makeSound() {
    console.log(`${this.sound} !!!!`);
  },
  sayHello() {
    console.log(`Hello ! My name is ${this.name}`);
  },
};

myAnimal.makeSound();
myAnimal.sayHello();
