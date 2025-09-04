console.log("Hola");

//Molde de datos

class Person {
  //Encapsulamiento
  #cellphone;
  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }
  //Agregamos los métodos
  sayHello() {
    console.log(`Hola, me llamo ${this.firstName} es un placer conocerte`);
  }
  introduce() {
    console.log(`Hola, buenas noches,me llamo ${this.firstName} 
    ${this.lastName} y tengo ${this.age} años`);
  }
  showCellphone() {
    return this.#cellphone;
  }
}
//Instancia de un objeto

let person1 = new Person(
  "Luisana",
  "Velandia",
  15,
  1.6,
  60,
  ["leer", "pintar", "cantar"],
  "123-456-7890"
);

console.log(person1);

console.log(person1.firstName);

person1.sayHello();
person1.introduce();

console.log(person1.showCellphone());

class Chef extends Person {
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    super(firstName, lastName, age, height, weight, hobbies, cellphone);
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  cook() {
    console.log(
      `El chef ${this.lastName} está cocinando 
      ${this.favoriteFood}`
    );
  }
  introduce() {
    console.log(
      `Hola me llamo ${this.firstName} ${this.lastName} y soy chef en el restaurante ${this.restaurant}`
    );
  }
}
let chef1 = new Chef(
  "Giorgia",
  "Puglio",
  15,
  1.6,
  60,
  ["leer", "pintar", "cantar"],
  "123-456-7890",
  "Madmoiselle",
  "Raviolis"
);
console.log(chef1.firstName);
chef1.introduce();
chef1.cook();
