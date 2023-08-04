// const person = {
//     FirstName: "Vanshika",
//     LastName: "Chaudhary",
//     Age: "20",
// };
// document.getElementById("demo").innerHTML= person["FirstName"] + " " + person["LastName"] + " " + "is" + " " + person["Age"] + " " + "years old.";

//another example;
function Car(brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year ;
    this.color = color ;
}

const Car1 = new Car('Toyoto', 'Camry', 2022, 'white');
const Car2 = new Car('Honda', 'civic', 2021, 'black');
console.log(Car1.brand, Car1.color);
console.log(Car2.brand, Car2.color);
