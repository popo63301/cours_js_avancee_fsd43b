let user = { name: "justin", age: 30 };

function sayHelloAndAge({ name, age }) {
  console.log(`Hello ${name}, tu as ${age} ans`);
}

sayHelloAndAge(user);
