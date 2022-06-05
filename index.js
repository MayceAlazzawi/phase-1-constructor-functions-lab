function Scooter(year, color, modal) {
  this.year = year; // don't forget ES6 power-tools, this is the same as `name: name`
  this.color = color;
  this.modal = modal;
}

const newScooter = new Scooter("Karbit", 'red', "1212");
console.log(newScooter)

function driver(name, age, experince) {
  this.name = name;
  this.age = age;
  this.experince = experince
}
const newDriver = new driver("Karbit", 'red', "1212");
console.log(newDriver)

function pickupLocation(adress, city) {
  this.adress = adress;
  this.city = city
}
const newPickupLocation = new pickupLocation("Karbit", 'red', "1212");
