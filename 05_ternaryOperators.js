console.log(`-------------- TCS Eligible And Not ELigiable Condidates for Interview -------------`);
var showDtails = function (gradScore,hscScore,sscScore,candidateName) {
    var result = gradScore >= 70 && hscScore>=80  && sscScore>= 90 && candidateName 
    ? `Hey ${candidateName} you are eligible for TCS Interview.`
    :`Hey ${candidateName} Sorry Unfortunately you are Not eligible for TCS Interview.`
    console.log(result);
};

showDtails(80 , 86,  90 ,"Rahul Tambe");
showDtails(70 , 65,  55 ,"Abhijeet Ingole");
showDtails(60 , 79,  88 ,"Nitin More");