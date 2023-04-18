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
    console.log(wordsArr);
}
/**
 * 格式化时间
 * 
*/
function paseTime(params) {
    console.log(params);
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
    ul:document.querySelector('.container ul')
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

/**
 * 设置元素的偏移量
 * 
*/

function setOffset() {
    let index = findIndex()
    
}