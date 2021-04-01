class Quiz{
constructor(){


}
getState(){
    var getState = database.ref('gameState');
    getState.on("value",(data)=>{gameState = data.val();});
}
update(state){
    database.ref('/').set({gameState:state});
}
async start(){
    if(gameState===0){
contestant = new Contestant();
var contestantCountRef = await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
    contestantCount = contestantCountRef.val();
    contestant.getCount();
}
question = new Question();
question.display();
    }
}
play(){
 question.input1.hide();
question.input2.hide();
question.title.hide();
question.submit.hide();
background("yellow");
var result = createElement('h1');
result.html("Result Of This QUIZ");
result.position(350,0);
Contestant.getContestantInfo();
if(allContestants!==undefined) {
for(var i in allContestants){
    var correctAns = "2";
    if(correctAns === allContestants[i].answer){
        fill("green");
        
    }
    else{
        fill("red");
    }
    text(allContestants[i].name+" : "+allContestants[i].answer,300,300);
}
  }
  }
    }








