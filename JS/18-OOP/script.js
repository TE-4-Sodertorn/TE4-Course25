console.log("");
// const car = {
//   brand: "Volvo",
//   speed: 120,
//   drive() {
//     console.log(`The ${this.brand} car, is driving at ${this.speed}km/h in the. highway!`);
//   },
// };

// car.fuel = "GASOLINE";
// car.drive();
// console.log(car);

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   drive() {
//     console.log(`The ${this.brand} car, is driving at ${this.speed}km/h in the. highway!`);
//   }
// }

// class ElectricCar extends Car {
//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//     console.log(`${this.brand} is charged to ${this.charge}%`);
//   }
// }

// const audi = new Car("Audi", 180);
// const bmw = new Car("BMW", 50);
// const tesla = new ElectricCar("Tesla", 110);

// audi.drive();
// bmw.drive();
// tesla.drive();
// tesla.chargeBattery(70);
// tesla.drive();

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  checkPassStatus() {
    console.log(`${this.name} has passed with grade ${this.grade}`);
  }
}

const mohamed = new Student("Mohamed", "C");

mohamed.checkPassStatus();
