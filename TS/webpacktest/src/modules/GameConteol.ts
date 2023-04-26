import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./scorepanel";
// 游戏控制类
class GamaControl{
    //定义三个属性
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    constructor(){
        this.snake = new Snake()
        this.food = new Food
        this.scorePanel = new ScorePanel()
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keydownHandler)
    }
    // 绑定键盘事件
    keydownHandler(e:KeyboardEvent){

    }
}
export default GamaControl;