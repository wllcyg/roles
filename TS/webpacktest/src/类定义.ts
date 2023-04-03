export class Person {
    // 实例属性,
    readonly name: string = '张三'; // 表示只读属性
    age: number = 12
    // 定义类属性及静态属性
    static level: number = 18
    // 定义方法
    sayHello() {
        console.log('hello');
    }
    static Run() {
        console.log('to run');

    }
}

export class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    static call() {
        console.log(this.name + 'call', this);
    }
    callOne(){
        console.log(this,'111');
    }
}

// 继承 ,子类用于父类所有的方法,如果子类中有父类相同方法,父类会被覆盖(方法的重写)

interface Anim{
    name:string;
    age:number
}

class Animal{
    name:string;
    age:number
    constructor(anim:Anim){
        const { name,age } = anim
        this.name = name
        this.age = age
    }
    sayHello(notice:string){
        console.log(this.name + notice);
        
    }
}

export class Dogs extends Animal{
    height:number
    constructor(anim:Anim,heighht:number){
        // 当前类的父类
        super(anim);
        this.height = heighht
    }
}

export class Cats extends Animal{

}

// 抽象类,不能来创建对象,用来被继承的,可以添加抽象方法
abstract class PersonPerpole{
    abstract run():string;// 子类必须重写抽象方法
}

class per1 extends PersonPerpole{
    run(): string {
        return '人们都在奔跑'
    }
}