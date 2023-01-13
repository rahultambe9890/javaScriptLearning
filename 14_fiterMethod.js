const arrayOfNum = [0, 20, 3, 5, 6, 10];
const arrayFilter = arrayOfNum.filter((currentValue) => {
  return currentValue > 5;
});
console.log(arrayFilter);

const arrayFilterEven = arrayOfNum.filter((currentValue) => {
  return currentValue % 2 == 0;
});
console.log(arrayFilterEven);

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

const arrayFilterVehicles=  arrayOfVehicles.filter((Vehicle)=>{
     return Vehicle.price >200000;
 })
 arrayFilterVehicles.forEach((element)=>{
console.log(element.company,element.price);
 })
