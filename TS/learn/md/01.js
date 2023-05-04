function a() {
  console.log(1);
  Promise.resolve().then(function () {
    console.log(2);
  });
}
setTimeout(() => {
    console.log(3);
    Promise.resolve().then(a)
},0)

Promise.resolve().then(function(){
    console.log(4);
})
console.log(5);

/**
 * 上面是一个eventLoop的过程问题
 * 1.宏任务放入 定时器函数,微任务放入,等待打印log4 
 * 2.执行log5
 * 3.取出log4打印
 * 4.执行log3打印.放入函数a
 * 5. 执行a,打印1
 * 6.执行log2
 * 7. 结果 54312
 * **/

// 关于依赖的收集

const user = {
  name:'张三',
  age:12
}
let tempname = user.name
Object.defineProperty(user,'name',{
  get:function(){
    return tempname
  },
  set:function(val){
    tempname = val
    // 监听到修改后调用依赖的函数
    showName()
  }
})
function showName(){
  console.log(user.name,'11111111');
}
user.name = '李四'

const userObj = {
  name:'王五',
  age:12
}

/**
 * 观察对象的属性
 * @param {Object} obj
 * 
*/
function observe(object){
  for (const key in object) {
    let internalValue = object[key]
    let foos = []
    Object.defineProperty(object,key,{
      get:function(){
        // 依赖收集:记录谁在用
        if (window.__func && !foos.includes(window.__func)) {
          foos.push(window.__func)
        }
        return internalValue
      },
      set:function(val){
        // 派发更新运行依赖
        internalValue = val
        for (let i = 0; i < foos.length; i++) {
          foos[i]();          
        }
      }
    })
  }
}
observe(userObj)
function autorun(fn){
  window.__func = fn
  fn()
  window.__func = null
}
