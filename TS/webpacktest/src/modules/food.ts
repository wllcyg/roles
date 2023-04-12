export default class Food{
    // 定义食物对应的元素
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('food')!;
    }
    // 定义一个获取X轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    // 定义一个获取Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }
    // 修改食物位置
    change(){
        /**
         * 最小位置0 最大为300
         * 移动一次是一格,一格10
         * **/
        let X,Y,distance;
        distance = Math.round(Math.random()*30)*10
        X = distance
        Y = distance
        this.element.style.top = Y + 'px'
        this.element.style.left = X + 'px'
    }
}