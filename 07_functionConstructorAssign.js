class bank {
    constructor(bankName, location, ifscCode, branchCode) {
        this.bankName = bankName;
        this.location =location;
        this.ifscCode = ifscCode;
        this.branchCode = branchCode;
    }
}

console.log(`2.`);
const yesBank = new bank ( "Yes Bank" , "Solapur", "YES000033", 5544 )
console.log( `Bank Details is:- Bank Name: ${yesBank.bankName} ,Location: ${yesBank.location} , IFSC: ${yesBank.ifscCode}, Branch code: ${yesBank.branchCode}` );
const sbiBank = new bank ( "SBI Bank" , "Sangola", "SBI000060", 6534 )
console.log( `Bank Details is:- Bank Name: ${sbiBank.bankName} ,Location: ${sbiBank.location} , IFSC: ${sbiBank.ifscCode}, Branch code: ${sbiBank.branchCode}` );
const mahBank = new bank ( "Maharastra Bank" , "Old Sangavi ", "MAH000068", 6832 )
console.log( `Bank Details" is:- Bank Name: ${mahBank.bankName} ,Location: ${mahBank.location} , IFSC: ${mahBank.ifscCode}, Branch code: ${mahBank.branchCode}` );
const axisBank = new bank ( "Axis Bank" , "Pune", "AXS000078", 8693)
console.log( `Bank Details is:- Bank Name: ${axisBank.bankName} ,Location: ${axisBank.location} , IFSC: ${axisBank.ifscCode}, Branch code: ${axisBank.branchCode}` );

console.log(`----------------------------------------------------------------------------------------------------------------------------`);

bank.prototype.openTime = "9 AM IST ";
bank.prototype.closeTime = " 6 PM IST";
console.log(`5.`);
console.log(`The opening time of the ${sbiBank.bankName}  is "${sbiBank.openTime }" And Close time is "${sbiBank.closeTime}"`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`6.`);
console.log(`The opening time of the ${axisBank.bankName}  is "${axisBank.openTime }" And Close time is "${axisBank.closeTime}"`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`7.`);
console.log(`The opening time of the ${yesBank.bankName} "Branch code  ${yesBank.branchCode } " is "${yesBank.openTime }" And Close time is "${yesBank.closeTime}"`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);