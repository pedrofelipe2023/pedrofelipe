// Exemplo de Herança
class Vehicle {
    constructor(make, model) {
      this._make = make;
      this._model = model;
    }
  
    getInfo() {
      return `${this._make} ${this._model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, color) {
      super(make, model);
      this._color = color;
    }
  
    getFullInfo() {
      return `${this.getInfo()} (${this._color})`;
    }
  }
  
  // Exemplo de Get e Set
  class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    set firstName(newFirstName) {
      this._firstName = newFirstName;
    }
  }
  
  // Uso das classes
  const myCar = new Car('Toyota', 'Camry', 'Blue');
  console.log(myCar.getFullInfo()); // Toyota Camry (Blue)
  
  const person = new Person('John', 'Doe');
  console.log(person.fullName); // John Doe
  
  person.firstName = 'Jane';
  console.log(person.fullName); // Jane Doe
  