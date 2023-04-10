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
    callOne() {
        console.log(this, '111');
    }
}

// 继承 ,子类用于父类所有的方法,如果子类中有父类相同方法,父类会被覆盖(方法的重写)

interface Anim {
    name: string;
    age: number
}

class Animal {
    name: string;
    age: number
    constructor(anim: Anim) {
        const { name, age } = anim
        this.name = name
        this.age = age
    }
    sayHello(notice: string) {
        console.log(this.name + notice);

    }
}

export class Dogs extends Animal {
    height: number
    constructor(anim: Anim, heighht: number) {
        // 当前类的父类
        super(anim);
        this.height = heighht
    }
}

export class Cats extends Animal {

}

// 抽象类,不能来创建对象,用来被继承的,可以添加抽象方法
abstract class PersonPerpole {
    abstract run(): string;// 子类必须重写抽象方法
}

class per1 extends PersonPerpole {
    run(): string {
        return '人们都在奔跑'
    }
}

// 定义接口的类的结构,可以写多个相同名字的接口
interface myInterFace {
    name: string;
    age: 12
}

const objx: myInterFace = {
    name: '12',
    age: 12
}

/***
 * 接口可以在类中限制类的结构
 * 接口中的方法都是抽象方法
*/

interface myInter {
    name: string;
    run(): string;
}

class Myclass implements myInter {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run(): string {
        return this.name
    }
}

/**
 * 属性的封装
 * 属性不可以被随意修改
 * 属性修饰符
 * public 可以任意修改
 * private 私有属性
 * protected 受保护的属性,只能在当前类及子类使用
 * 
*/
class NerPerson {
    public name: string
    private age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    // 成为属性存取器
    getName() {
        return this.age
    }
    setName(value: number) {
        if (value >= 12) {
            this.age = value
        }
    }
    // TS中的存取器
    get _name() {
        return this.name
    }
    set _name(value: string) {
        this.name = value
    }
}
let p1 = new NerPerson('占山', 12)

// 类的简写形式,不需要使用this 来重新赋值

class NewP2 {
    constructor(public a:string,public b:number){

    }
}

// 使用泛型来进行返回值类型判断,类型不明确

function foo<T>(a:T):T{
    return a;
}

foo<string>('222') // 指定泛型的返回值

interface Inters{
    length:number
}
// 实现接口的实现类
function foo3<T extends Inters>(a:T):number{
    return a.length
}
foo3('12121')