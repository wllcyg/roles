<script setup lang="ts">
let img1s = new URL('../../assets/1.png', import.meta.url).href

import { onMounted, ref } from 'vue'
const props = defineProps({
  foo: { type: String, required: true }
})
const canvas1 = ref(null)
const videoUrl = ref('//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4')
const initCan = () => {
  let ctx = canvas1.value.getContext('2d')
  // 绘制矩形(位置X,Y,长度X,高度Y)
  ctx.beginPath()
  // 填充模式
  ctx.fillRect(20, 20, 100, 100)
  // 路径模式
  ctx.strokeRect(140, 20, 100, 100)
  ctx.closePath()
  // 清除页面的图像
  // ctx.clearRect(0,0,canvas1.value.clientWidth,canvas1.value.clientHeight)
  // 分开绘制
  ctx.beginPath()
  ctx.rect(20, 160, 100, 100)
  ctx.stroke() // 绘制路径
  ctx.fillStyle = 'green'
  ctx.fill()
  ctx.closePath()
  // 笑脸
  ctx.beginPath()
  ctx.arc(200, 210, 60, 0, Math.PI * 2) // 圆心,半径,默认顺时针
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.arc(180, 190, 10, 0, Math.PI * 2)
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.arc(220, 190, 10, 0, Math.PI * 2)
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.arc(200, 220, 30, 0, Math.PI / 1)
  ctx.stroke()
  ctx.closePath()
  // 使用moveTo方法的
  ctx.beginPath()
  ctx.arc(300, 300, 50, 0, Math.PI * 2)
  ctx.moveTo(335, 300)
  ctx.arc(300, 300, 35, 0, Math.PI)
  ctx.stroke()
  ctx.closePath()
  // 直线
  ctx.beginPath()
  ctx.rect(20, 400, 400, 400)
  ctx.stroke()
  ctx.moveTo(30, 410)
  ctx.lineTo(30, 450) // 直线
  ctx.stroke()
  ctx.closePath()
  // 关于贝塞尔曲线
  ctx.beginPath()
  ctx.moveTo(100, 450)
  ctx.arcTo(100, 500, 50, 500, 50) // 此刻为四分之一圆形
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(200, 700)
  ctx.quadraticCurveTo(150, 700, 150, 600) // 控制点,终点
  ctx.quadraticCurveTo(150, 500, 300, 500)
  ctx.quadraticCurveTo(450, 500, 450, 600)
  ctx.quadraticCurveTo(450, 700, 300, 700)
  ctx.quadraticCurveTo(250, 750, 150, 750)
  ctx.quadraticCurveTo(200, 750, 200, 700)
  ctx.stroke()
  ctx.closePath()
  // 三次贝塞尔曲线
  ctx.beginPath()
  ctx.rect(20, 800, 400, 400)
  ctx.moveTo(20, 800)
  ctx.lineTo(30, 850) // 直线
  ctx.moveTo(200, 1000)
  ctx.bezierCurveTo(250, 950, 400, 1000, 200, 1100)
  ctx.bezierCurveTo(50, 1000, 150, 950, 200, 1000)
  ctx.strokeStyle = 'red' // 红色边框
  // 实现渐变,左上,右下坐标// 颜色填充
  let LinearGradien = ctx.createLinearGradient(20, 800, 420, 1200)
  LinearGradien.addColorStop(0, 'red')
  LinearGradien.addColorStop(1, 'blue')
  ctx.fillStyle = LinearGradien
  ctx.fillRect(20, 800, 400, 400)
  ctx.stroke()
  ctx.closePath()
  // 图案填充
  ctx.beginPath()
  ctx.rect(280, 20, 50, 50)
  let img = new Image()
  img.src = img1s
  img.onload = () => {
    let patten = ctx.createPattern(img, 'no-repeat')
    ctx.fillStyle = patten
    ctx.fillRect(280, 20, 100, 100)
  }
  ctx.stroke()
  ctx.closePath()
  // 线条样式
  ctx.beginPath()
  ctx.rect(280, 140, 100, 100)
  // ctx.moveTo(300, 180)
  // ctx.lineTo(340, 220)
  // ctx.lineTo(360, 160)
  // ctx.lineWidth = 4
  // // 端点样式
  // ctx.lineCap = 'round'
  // // 线段连接处的外侧角 mitter 平面
  // ctx.lineJoin = 'round'
  // // 斜截面限制大小
  // ctx.miterLimit = 6
  // 虚线
  ctx.setLineDash([10, 5])
  ctx.stroke()
  ctx.closePath()
  const indexStep = ref(0)
  const renderLine = () => {
    // 清空给定矩形内的元素
    ctx.clearRect(280, 140, 100, 100)
    indexStep.value ++
    if(indexStep.value > 400){
      indexStep.value = 0
    }
    // 线条样式
    ctx.moveTo(300, 180)
    ctx.lineTo(340, 220)
    ctx.lineTo(360, 160)
    ctx.lineWidth = 4
    // 端点样式
    ctx.lineCap = 'round'
    // 线段连接处的外侧角 mitter 平面
    ctx.lineJoin = 'round'
    // 斜截面限制大小
    ctx.miterLimit = 6
    // 虚线
    ctx.setLineDash([10, 8])
    ctx.lineDashOffset = indexStep.value
    ctx.stroke()
    requestAnimationFrame(renderLine)
  }
  renderLine()
  // 使用canvas绘制图片
  ctx.beginPath()
  const can_img = new Image()
  can_img.src = img1s
  can_img.onload = () => {
    // 图片url,渲染的位置
    // ctx.drawImage(can_img,400,20)
    // 绘制图片有大小,大小,位置
    // ctx.drawImage(can_img,400,20,200,100)
    // 第三种绘制方法 图片位置,裁剪大小,图片位置,图片大小
    ctx.drawImage(can_img,300,0,200,343,400,20,200,100)
  }
  ctx.stroke()
  ctx.closePath()
  // 绘制视频
  const video = document.createElement('video')
  video.src = ''
  // 文字填充
  ctx.beginPath()
  ctx.font = '20px Microsoft YaHei'
  // 参数:文本 文本坐标 文字大小
  ctx.fillText('张三',600,40,50)
  ctx.stokeStyle = '#ff0000'
  ctx.strokeText('李111四', 600, 100)
  ctx.closePath()
  // 旋转缩放
  ctx.beginPath()
  ctx.fillRect(600,200,50,50)
  ctx.stroke()
  ctx.closePath()
  // 图片堆叠层级
  ctx.beginPath()
  ctx.filStyle = 'rgba(255,0,255,1)'
  ctx.fillRect(500,300,50,50)
  ctx.fillRect(525,325,50,50)
  ctx.closePath()
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
onMounted(() => {
  initCan()
})!
</script>

<template>
  <div>
    <h1>
      canvas 基本图形展示
    </h1>
    <!--    画板的宽高-->
    <canvas
      id="content"
      width="1200"
      height="1200"
      ref="canvas1"
    ></canvas>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
