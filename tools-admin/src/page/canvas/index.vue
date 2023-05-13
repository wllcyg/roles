<script setup lang="ts">
import {onMounted, ref} from 'vue'

const props = defineProps({
  foo: {type: String, required: true}
})
const canvas1 = ref(null)
const initCan = () => {
  let ctx = canvas1.value.getContext('2d')
  // 绘制矩形(位置X,Y,长度X,高度Y)
  ctx.beginPath()
  //填充模式
  ctx.fillRect(20, 20, 100, 100)
  // 路径模式
  ctx.strokeRect(140, 20, 100, 100)
  ctx.closePath()
  //清除页面的图像
  // ctx.clearRect(0,0,canvas1.value.clientWidth,canvas1.value.clientHeight)
  // 分开绘制
  ctx.beginPath()
  ctx.rect(20, 160, 100, 100)
  ctx.stroke() // 绘制路径
  ctx.fillStyle = "green";
  ctx.fill()
  ctx.closePath();
  // 笑脸
  ctx.beginPath()
  ctx.arc(200, 210, 60, 0, Math.PI * 2);// 圆心,半径,默认顺时针
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
  ctx.arc(300,300,50,0,Math.PI * 2)
  ctx.moveTo(335,300)
  ctx.arc(300,300,35,0,Math.PI)
  ctx.stroke()
  ctx.closePath()
  //直线
  ctx.beginPath()
  ctx.rect(20,400,400,400)
  ctx.stroke()
  ctx.moveTo(30,410)
  ctx.lineTo(30,450)// 直线
  ctx.stroke()
  ctx.closePath()
  // 关于贝塞尔曲线
  ctx.beginPath()
  ctx.moveTo(100,450)
  ctx.arcTo(100,500,50,500,50) // 此刻为四分之一圆形
  ctx.stroke();
  ctx.closePath()
  ctx.beginPath();
  ctx.moveTo(200,700)
  ctx.quadraticCurveTo(150,700,150,600)
  ctx.quadraticCurveTo(150,500,300,500)
  ctx.quadraticCurveTo(450,500,450,600)
  ctx.quadraticCurveTo(450,700,300,700)
  ctx.quadraticCurveTo(250,750,150,750)
  ctx.quadraticCurveTo(200,750,200,700)
  ctx.stroke()
  ctx.closePath()
  // 三次贝塞尔曲线
  

}
onMounted(() => {
  initCan();
})!
</script>

<template>
  <div>
    <h1>
      canvas 基本图形展示
    </h1>
    <!--    画板的宽高-->
    <canvas id="content" width="1200" height="1200" ref="canvas1"></canvas>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
