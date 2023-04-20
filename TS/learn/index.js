/**
 * 格式化歌词
 *
 */
let wordsArr = [];
function paseLrc() {
  let lrcArr = musiclrc.split("\n");
  lrcArr.forEach((e) => {
    let paresObj = e.split("]");
    let obj = {
      time: paseTime(paresObj[0].replace("[", "").split(":")),
      words: paresObj[1],
    };
    wordsArr.push(obj);
  });
  console.log(wordsArr);
}
/**
 * 格式化时间
 *
 */
function paseTime(params) {
  console.log(params);
  const [t1, t2] = params;
  return +t1 * 60 + +t2;
}
paseLrc();
/**
 * 计算出当前播放是在第几秒
 *
 */
let doms = {
  audio: document.querySelector("audio"),
  ul: document.querySelector(".container ul"),
  container: document.querySelector(".container"),
};
function findIndex() {
  let currentTime = doms.audio.currentTime;
  for (let i = 0; i < wordsArr.length; i++) {
    if (currentTime < wordsArr[i].time) {
      return i - 1;
    }
  }
  return wordsArr.length - 1;
}

/**
 * 创建界面
 * */
function createElements() {
  for (let i = 0; i < wordsArr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = wordsArr[i].words;
    doms.ul.appendChild(li);
  }
}
createElements();
// 容器的高度
let containerHeight = doms.container.clientHeight;
let liHeight = doms.ul.children[0].clientHeight;
let maxOffset = doms.ul.clientHeight - containerHeight; //最大的高度
/**
 * 设置元素的偏移量
 *
 */

function setOffset() {
  let index = findIndex();
  let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
  console.log(offset,'offsetoffsetoffset');

  if (offset > maxOffset) {
    offset = maxOffset;
  }

  doms.ul.style.transform = `translateY(-${offset}px)`;
  // 去除其他的样式
  let actli = doms.ul.querySelector(".active");
  if (actli) {
    actli.classList.remove("active");
  }
  let li = doms.ul.children[index];
  if (li) {
    li.classList.add("active");
  }
}

doms.audio.addEventListener("timeupdate", function (params) {
    setOffset()
});
