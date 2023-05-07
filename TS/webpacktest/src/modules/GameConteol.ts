import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./scorepanel";
import * as stream from "stream";

// 游戏控制类
class GamaControl {
    //定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 属性控制蛇的方向
    direction: string = 'ArrowRight'
    // 创建属性记录游戏是否结束
    isLive = true;
    constructor() {
        this.snake = new Snake()
        this.food = new Food
        this.scorePanel = new ScorePanel()
        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    // 绑定键盘事件
    /**
     ArrowUp
     ArrowDown
     ArrowLeft
     ArrowRight
     * */
    keydownHandler(e: KeyboardEvent) {
        // @ts-ignore
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            this.direction = e.key
        }
    }

    // 蛇开始移动
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowRight':
                X += 10;
                break;
        }
        this.snake.X = X
        this.snake.Y = Y
        this.isLive && setTimeout(this.run.bind(this),300)
    }
}

export default GamaControl;