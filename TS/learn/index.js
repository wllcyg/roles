/**
 * 格式化歌词
 *
*/
let wordsArr = []
function paseLrc() {
    let lrcArr = musiclrc.split('\n')
    lrcArr.forEach(e => {
        let paresObj = e.split(']')
        let obj = {
            time:paseTime(paresObj[0].replace('[','').split(':')),
            words:paresObj[1]
        }
        wordsArr.push(obj)
    })
}
/**
 * 格式化时间
 *
*/
function paseTime(params) {
    const [t1,t2] = params
    return +t1*60 + (+t2)
}
paseLrc()
/**
 * 计算出当前播放是在第几秒
 *
*/
let doms = {
    audio:document.querySelector('audio'),
    ul:document.querySelector('.container ul'),
    liH:''
}
function findIndex() {
    let currentTime = doms.audio.currentTime
    for (let i = 0; i < wordsArr.length; i++) {
        if (currentTime < wordsArr[i].time) {
            return i - 1
        }
    }
    return wordsArr.length - 1
}

/**
 * 创建界面
 * */
function createElements() {
    let liFrogment = document.createDocumentFragment()
    for (let i = 0; i < wordsArr.length; i++) {
        let li = document.createElement('li')
        li.textContent = wordsArr[i].words
        liFrogment.appendChild(li)
    }
    doms.ul.appendChild(liFrogment)
}
createElements()
// 存放li
let LI_LIST = []
/**
 * 设置元素的偏移量
 *
*/
function setOffset() {
    let index = findIndex()
    if (LI_LIST[index]){
      LI_LIST[index].classList.add('active')
      doms.ul.style.transform = `translateY(${210 - (index * 36)}px)`
    }

    LI_LIST.forEach((e,ind) => {
      if(ind !== index){
        LI_LIST[ind].classList.remove('active')
      }
    })
}
setOffset()
function play(){
  LI_LIST = doms.ul.querySelectorAll('li')
  doms.liH = LI_LIST[0].offsetHeight / 2
  console.log('当前开始播放')
}
function  pause(){
  console.log('暂停播放')
}
function playing(){
  setOffset()
}
/**
 * 添加事件监听进行处理
 * */
function eventListen(){
  doms.audio.addEventListener('play',play)
  doms.audio.addEventListener("pause", pause)
  doms.audio.addEventListener('timeupdate',playing)
}
eventListen()
