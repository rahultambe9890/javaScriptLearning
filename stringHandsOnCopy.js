var sentence = "     Hey you are doing good, keep it up      ";
console.log("Given String:-     Hey you are doing good, keep it up     ");
console.log("1) Length of given String is :-", sentence.length, "\n");
var sentence = "     Hey you are doing good, keep it up     ";
var resultTrim = sentence.trim();
console.log(
  "2)Sentence After Trim And Length :-",
  resultTrim,
  resultTrim.length,
  "\n"
);
var resultSpace = sentence.length - resultTrim.length;
console.log(
  "3)The total no. of extra spaces that is removed in step-3 is :-",
  resultSpace,
  "\n"
);
var sentence = resultTrim;
console.log(
  "4)First And Last Character After Strim ",
  "first character:-",
  sentence.charAt(0),
  "And",
  "last Character:-",
  sentence.charAt(33),
  "\n"
);
var wordsInSentence = sentence.split(" ");
console.log(
  "5)Total words in sentence string is: ",
  wordsInSentence.length,
  "\n"
);
var sentence = resultTrim;
console.log(
  "6)index of word good in given strin is;-",
  sentence.indexOf("good"),
  "\n"
);
var sentence = resultTrim;
console.log(
  "7)The Substring starting from index 22",
  "Using Substring():-",
  sentence.substring(22),
  "And using slice():-",
  sentence.slice(22),
  "\n"
);
var sentence = resultTrim;
console.log("8)Is string end with word up ", sentence.includes("up"), "\n");
console.log("9)Is string start with word Hey ", sentence.includes("Hey"));
