console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`A) Creat the Bank class and add the data members`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`B) Creat the object for all Banks`);
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
const mapOfBank = new Map(); 
mapOfBank.set(axisBank.account_no,axisBank);
mapOfBank.set(sbiBank.account_no,sbiBank);
mapOfBank.set(iciciBank.account_no,iciciBank);
mapOfBank.set(kotakBank.account_no,kotakBank);
mapOfBank.set(hdfcBank.account_no,hdfcBank);
mapOfBank.set(punjabBank.account_no,punjabBank);

console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(` C) Create the Map in such a way that should be accountNo And value is object that is Created in step B `);
const keyOfMapBank = mapOfBank.keys();
console.log(keyOfMapBank);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);

console.log(` D) Traverse the map, Log bankName , accountNo and intrerestRate `);
const demoArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,punjabBank];
//console.log(demoArray[0]);
console.log("Using for of loop");
for (const element of demoArray) {

    console.log(`Bank name:-`,element.bankName,"," ,`Account no:-`,element.account_no, ",", `Interest Rate:-`,element.interest_rate);
}