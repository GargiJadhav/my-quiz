class Question{
constructor(){
    this.title = createElement('h1');
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
    this.input1 = createInput("Enter your name here...");
    this.input2 = createInput("Enter Correct Option no..");
    this.submit = createButton("Submit");
}


display(){
this.title.html("My Quiz Game");
this.title.position(350,0);
this.question.html("Question:- What starts and ends with 'E',but has only one letter? ");
this.question.position(150,80);
this.option1.html("1: Everyone");
this.option1.position(150,100);
this.option2.html("2: Envelope");
this.option2.position(150,120);
this.option3.html("3: Estimate");
this.option3.position(150,140);
this.option4.html("4: Example");
this.option4.position(150,160);
this.input1.position(150,230);
this.input2.position(300,230);
this.submit.position(200,300);

this.submit.mousePressed(()=>{

    this.input1.hide();
    this.input2.hide();
    this.submit.hide();
    this.title.hide();
    contestant.name = this.input1.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
})
}



}