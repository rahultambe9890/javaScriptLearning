console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`1) Creat the class and add the data members`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`2) Creat the following object`);
class Bank {
    constructor(bankName, location, account_no,  ifscCode, interest_rate) {
        this.bankName = bankName;
        this.location =location;
        this.account_no=account_no;
        this.ifscCode = ifscCode;
        this.interest_rate = interest_rate;
    }
}
const axisBank = new Bank ( "Axis Bank" , "Pune", 116435894987 , "AXS000078", 7.6)
console.log( `Bank Details is:- Bank Name: '${axisBank.bankName}  ,Location: ${axisBank.location }    ,Account no :${axisBank.account_no}   , IFSC: ${axisBank.ifscCode}  , Interest Rate: ${axisBank.interest_rate}%` );
const sbiBank = new Bank  ( "SBI Bank" , "Sangola",087234732709, "SBI000060", 8.7 )
console.log( `Bank Details is:- Bank Name: ${sbiBank.bankName}    ,Location: ${sbiBank.location  }    ,Account no: ${sbiBank.account_no}    , IFSC: ${sbiBank.ifscCode}   , Interest Rate: ${sbiBank.interest_rate}%` );
const iciciBank = new Bank  ( "iciciBank" , "Solapur",879987097867,"ICICI000033", 9 )
console.log( `Bank Details is:- Bank Name: ${iciciBank.bankName}  ,Location: ${iciciBank.location}    ,Account no : ${iciciBank.account_no}  , IFSC: ${iciciBank.ifscCode}, Interest Rate: ${iciciBank.interest_rate}%` );
const kotakBank = new Bank  ( "Kotak Bank" , "Old Sangavi ",908779687999, "KOT000068", 7 )
console.log( `Bank Details is:- Bank Name: ${kotakBank.bankName}  ,Location: ${kotakBank.location},Account no : ${kotakBank.account_no} , IFSC: ${kotakBank.ifscCode} , Interest Rate: ${kotakBank.interest_rate}%` );
const hdfcBank = new Bank  ( "hdfc Bank" , "Sangola",68869760008, "HDFC000060", 9 )
console.log( `Bank Details is:- Bank Name: ${hdfcBank.bankName}   ,Location: ${hdfcBank.location}    ,Account no : ${hdfcBank.account_no}    , IFSC: ${hdfcBank.ifscCode}, Interest Rate: ${hdfcBank.interest_rate}%` );
const punjabBank = new Bank  ( "punjab Bank" , "Sangola", 98674869876,"PUN000060", 10 )
console.log( `Bank Details is:- Bank Name: ${punjabBank.bankName} ,Location: ${punjabBank.location}   ,Account no : ${punjabBank.account_no}    , IFSC: ${punjabBank.ifscCode}, Interest Rate: ${punjabBank.interest_rate}%` );

console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`3) Creat an array of above objects and travers with for of loop and just log Bank name and Location` );
const demoArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,punjabBank];
//console.log(demoArray[0]);
console.log("Using for of loop");
for (const element of demoArray) {
    console.log(element.bankName,"," ,element.location);
}
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`4) Find the object which has name "Kotak Bank " using for of loop`);
for (const element of demoArray) {

    if(element.bankName=="Kotak Bank")
    {
          console.log(element);

    }
}

console.log(" 5)Log the details using for loop");
for (let index = 0; index < demoArray.length; index++) {
  console.log(demoArray[index]);
  
}
