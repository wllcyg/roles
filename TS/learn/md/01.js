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