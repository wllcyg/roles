console.log(1111111111111);
console.log('我是哦类型');

// 类型断言 as
// 函数的返回值为空,或者无返回值
function foo():void{

}
function foo1():never{ // 永远不会有返回值
    throw new Error(' 报错了')
}

let a :object;
a ={}
let b:{name:string,age?:number} // 指定对象中包含的内容,?是可选操作符号
b = { name:'湛山',age:12 }
let c:{name:string,[proname:string]:any} // 后面的类型表示任意属性
c = { name:'李四',age:222 }
let bf:(a:number,b:number)=>number  //  定义一个函数类型
bf = (a,b) => {
    return a+b
}

//数组
let aArr:string[] = ['1','2','3'] // 字符串数组
let gArr:Array<number> = [1,2,3] // 数字数组

// 元组 长度固定,
let h:[string,string] = ['1','2']
// 枚举 enum  直接可以使用映射
enum Gender{
    name='湛山',
    age=1
}
let i :{test:string,name:Gender}
i={
    test:'李四',
    name:Gender.name
}
// | $ 
let l1 :{name:string} & {age:number} = {name:'王五',age:22222}
//类型别名
type myType = 1|2|3
let k :myType
k = 1