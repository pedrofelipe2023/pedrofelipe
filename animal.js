// Exemplo de Herança
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} faz algum som.`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} late alto!`);
  };
  
  // Exemplo de Get e Set
  function Person(firstName, lastName) {
    let _firstName = firstName;
    let _lastName = lastName;
  
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return `${_firstName} ${_lastName}`;
      }
    });
  
    Object.defineProperty(this, 'firstName', {
      get: function() {
        return _firstName;
      },
      set: function(newFirstName) {
        _firstName = newFirstName;
      }
    });
  }
  
  // Uso das classes
  const myDog = new Dog('Buddy', 'Golden Retriever');
  myDog.speak();
  myDog.bark();
  
  const person = new Person('John', 'Doe');
  console.log(person.fullName);
  person.firstName = 'Jane';
  console.log(person.fullName);
  