
console.log(`============ map() ===============`);
const arrayOfNumbers = [0,2,3,5,6];
// [10,12,13,15,16]
const arrayTransform = arrayOfNumbers.map((currentvalue)=>{
  return currentvalue+10;//0+10,2+10
})
console.log(arrayTransform);

const arrayOfSquare = arrayOfNumbers.map((currentvalue)=>{
return currentvalue*currentvalue
})
console.log(arrayOfSquare);

class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

 const arrayOfVehicles = [audiA3, audiQ3, mahindra, honda, hero];
 const arrayOfVehicleObject = arrayOfVehicles.map((Vehicle) => {
   Vehicle.price = Vehicle.price - 10000;
   return Vehicle;
 });

 arrayOfVehicleObject.forEach((Vehicle) => {
   console.log(Vehicle);
 });

 const arrayOfNum = [0, 2, 3, 5, 6];
 const arraywith = arrayOfNum.map((value, index) => {
   return value + index;
 });
 console.log(arraywith);
 