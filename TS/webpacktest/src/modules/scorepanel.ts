export default class ScorePanel{
    score = 0;
    level = 1;
    maxLevel:number
    upScore:number
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addScore(){
        this.score ++;
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    levelUp(){
        if (this.level < this.maxLevel) {
            this.level ++;
        }
    }
}