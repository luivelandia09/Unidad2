let person = {
    name:"Luisana Velandia",
    age: 15,
    cellphone:"9999900000",
    hobbies: ["Leer", "escuchar música", "aprender idiomas"]
}
console.log(person);


console.log(person.name);
console.log(person.age);
console.log(person["cellphone"]);
console.log(person.hobbies);
console.log(person.hobbies[0]);

person.cellphone = "9999911111";
console.log(person.cellphone);

person.birthDate = "09-07-2000";
console.log(person);

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  console.log(heroes);
  console.log(heroes.members);
  console.log(heroes.members[0].name);

  console.log(heroes.members[1].powers[1]);
  console.log(heroes.members[2].name);
  console.log(heroes.members[2].powers[2]);