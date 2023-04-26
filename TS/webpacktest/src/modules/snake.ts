export default class Snake{
    //蛇头
    head:HTMLElement;
    //蛇的身体
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取蛇的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    // 设置蛇头和蛇尾
    set X(value:number){
        this.head.style.left = value + 'px'
    }
    set Y(value:number){
        this.head.style.top = value + 'px'
    }
    // 蛇身体增加的方法,向其中添加div
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
}