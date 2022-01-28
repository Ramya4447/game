var ans=0;
var score=0;
var time;
var timedisplay;
function startgame(){
  document.getElementById("startgame").disabled=true;
question();
}
function timing(){
time=9;
var timing=document.getElementById("timeleft");
timedisplay=setInterval(function(){
timing.innerHTML="Time Remaining : "+time;
time=time-1;
  if(time==-1){
      clearInterval(timedisplay);
      window.location.href="tryagain.html";
  }
},500)
}
function question(){
  var sum=0;
var num1=Math.floor((Math.random()*12)+1);
document.getElementById("questionbox1").innerHTML=num1;
var num2=Math.floor((Math.random()*12)+1);
document.getElementById("questionbox2").innerHTML=num2;
answer=num1*num2;
var wronganswer1=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
if(wronganswer1!=answer){
  sum=sum+1;
}
else{
  var wronganswer1=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
}
var wronganswer2=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
if(wronganswer2!=answer && wronganswer2!=wronganswer1){
  sum=sum+1;
}
else{
  var wronganswer2=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
}
var wronganswer3=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
if(wronganswer3!=answer && wronganswer3!=wronganswer1 && wronganswer3!=wronganswer2){
  sum=sum+1;
}
else{
  var wronganswer3=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
}
var wronganswer4=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
if(wronganswer4!=answer && wronganswer4!=wronganswer1 && wronganswer4!=wronganswer2 && wronganswer4!=wronganswer3){
  sum=sum+1;
}
else{
  var wronganswer4=Math.floor((Math.random()*12)+1)*(Math.floor((Math.random()*12)+1));
}
document.getElementById("answerbox1").innerHTML=wronganswer1;
document.getElementById("answerbox2").innerHTML=wronganswer2;
document.getElementById("answerbox3").innerHTML=wronganswer3;
document.getElementById("answerbox4").innerHTML=wronganswer4;
var correctindex=Math.floor((Math.random()*4)+1);
var correctId="answerbox"+correctindex;
document.getElementById(correctId).innerHTML=answer;
timing();
}
function option(choice){
var res=document.getElementById("answerbox"+ choice).innerHTML;
if(res==answer){
  score=score+5;
  document.getElementById("marks").innerHTML="Score : "+score;
  clearInterval(timedisplay);
  time=10;
  question();

}
else{
  window.location.href="tryagain.html";
}
}
function tryagain(){
  window.location.href="simple.html";
}