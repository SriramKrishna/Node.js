var person = {
	name: 'krish',
	age: 22
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

///////////////////////////////////////

console.log('challenge area');


var animal = '{"name": "sri"}';
var animalObject = JSON.parse(animal);

animalObject.age=1;


animal = JSON.stringify(animalObject);
console.log(animal);