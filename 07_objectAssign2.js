console.log(`------------------------- Object with data member and member function --------------------`);
let sbiBank = {
    bankName : "State Bank Of India",
    location : "Sangola",
    accountNo : 123465789012,
    IFSC : "SBI",
    interestRate : "9.5%",
    showDetails : function(){
         console.log(sbiBank);
    }
}
let axisBank = {
    bankName : "Axis Bank",
    location : "Sangola",
    accountNo : 78574386786,
    IFSC : "Axs0000552",
    interestRate : "8.4%",
    showDetails : function(){
        console.log(axisBank);
   }
}
let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Solapure",
    accountNo : 85638970756654,
    IFSC : "HDFC0000552",
    interestRate : "9.4%",
    showDetails : function(){
        console.log(hdfcBank);
   }
}
let yesBank = {
    bankName : "YES Bank",
    location : "Sangola",
    accountNo : 279767656787,
    IFSC : "YES0000552",
    interestRate : "11%",
    showDetails : function(){
        console.log(yesBank);
   }
}

console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`1) SBI Bank details by invoking the function`);
sbiBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`2) AXIS Bank details by invoking the function`);
axisBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`3) HDFC Bank details by invoking the function`);
hdfcBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`4) YES Bank details by invoking the function`);
yesBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------------`);
