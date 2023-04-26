<script setup lang="ts">
import { fabric } from 'fabric'
import { onMounted, ref } from 'vue'
const canRef = ref(null)
const canRefBg = ref(null)
const canvasbind = ref(null)
const imgUrl =
  'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp'
const init = () => {
  /**
   * canvas 这里是可操作的canvas
   * StaticCanvas 静态不可交互的 fabric.StaticCanvas
   */
  const canvas = new fabric.Canvas(canRef.value, {
    backgroundColor: '#eee' // 画布背景色`
  })
  const rect = new fabric.Rect({
    top: 30,
    left: 30,
    width: 100,
    height: 100,
    fill: 'red'
  })
  const circle = new fabric.Circle({
    radius: 30,
    to: 50,
    left: 150,
    fill: 'pink'
  })
  canvas.setBackgroundImage(imgUrl, canvas.renderAll.bind(canvas), {
    angle: 15 // 旋转背景图
  })
  canvas.add(rect)
  canvas.add(circle)
}
const initbg = () => {
  const canvas = new fabric.Canvas(canRefBg.value)
  fabric.Image.fromURL(imgUrl, (val) => {
    canvas.setBackgroundImage(val, canvas.renderAll.bind(canvas), {
      scaleX: canvas.width / val.width,
      scaleY: canvas.height / val.height
    })
  })
}
const initbind = () => {

}
onMounted(() => {
  init()
  initbg()
  initbind()
})
</script>

<template>
  <div>
    <h2>fabric 基础</h2>
    <canvas
      ref="canRef"
      class="w-52 h-52 rounded-xl border-solid border-blue-400 border-2"
    ></canvas>
    <canvas
      ref="canRefBg"
      class="w-52 h-52 rounded-xl border-solid border-blue-400 border-2"
    ></canvas>
    <canvas width="400" height="375" ref="canvasbind" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
