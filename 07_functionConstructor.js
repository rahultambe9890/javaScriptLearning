// class Student { 
//     name
//     rollNo
//     age
//     graduation
//     constructor( name, rollNo, age, graduation){
//         this.name=name;
//         this.rollNo=rollNo;
//         this.age = age;
//         this.graduation=graduation;
//     }

// }
function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 let s1 = new Student("Vinny", 111, 23);
 console.log(s1);
 console.log(s1.rollNo);
 let s2 = new Student("Jenny", 22, 35);
 console.log(s2);

 const arrayOfNum = [ 3 ,5 , 6 ,8 , 9  ]
 let arraylen = arrayOfNum.length
 arrayOfNum.push(10)
 arrayOfNum.pop( )
