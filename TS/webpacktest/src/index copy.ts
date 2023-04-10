console.log('我是ts文件');
import { a } from './view'
console.log(a);
const test1 = 'eeeee'
console.log(test1);

import { Person ,Dog,Dogs,Cats} from './类定义';

let per = new Person()
console.log(per,Person.level);
per.sayHello()

let dog = new Dog('黄狗',12)
Dog.call()
dog.callOne()

let cats =new Cats({name:'小猫',age:12})
cats.sayHello('喵喵喵')
const aobj = {a:12}
console.log(aobj);
