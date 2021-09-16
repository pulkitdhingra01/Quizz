var readlinesync = require("readline-sync");
var username=readlinesync.question("What is Your name?");
console.log("Welcome "+username+"!! Do You know Pulkit Dhingra??")
console.log("Lets Find Out!!")
score=0
function qna(question,answer){
  
  var userans = readlinesync.question(question);

  if (answer == userans){
    console.log("Right Answer!!:)")
    score=score+1
    console.log("Your score is "+score)
  }
  else{
    console.log("Wrong :O")
    score=score-1
    console.log("Your score is "+score)
  }
}
question1={
  question:"How old Is Pulkit?",
  answer:21
}
question2={
  question:"What is Pulkit's Favourite Fast food?",
  answer:"pizza"
}
question3={
  question:"What phone does pulkit have?",
  answer:"pocof1"
}
question4={
  question:"Does Pulkit know how to drive?",
  answer:"yes"
}
question5={
  question:"Is Pulkit Stupid?",
  answer:"yes"
}
lisstques=[question1,question2,question3,question4,question5]
for (var i=0;i<lisstques.length;i++){
  currentques=lisstques[i];
  qna(currentques.question,currentques.answer)
}
console.log("Your final score is "+score)