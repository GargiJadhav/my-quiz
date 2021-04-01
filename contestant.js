class Contestant{
    constructor(){
    this.name = null;
    //this.answer = null;
    this.index = null;
    }
    
    updateCount(count){
        database.ref('/').update({contestantCount:count})
    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){contestantCount = data.val();})
    }
    update(){
        var contestantIndex = "contestants/contestant"+this.index;
        database.ref(contestantIndex).set({name:this.name,answer:this.answer})
    }
    static getContestantInfo(){
        
        var contestantInfo = database.ref('contestants');
    contestantInfo.on("value",(data)=>{ allContestants = data.val();});
    }
    }
    