<script setup lang="ts">
import { fabric } from 'fabric'
import { onMounted, ref } from 'vue'
const canRef = ref(null)
const init = () => {
  /**
   * canvas 这里是可操作的canvas
   * StaticCanvas 静态不可交互的 fabric.StaticCanvas
  */
  const canvas = new fabric.Canvas(canRef.value,{
    backgroundColor: '#eee' // 画布背景色`
  })
  const rect = new fabric.Rect({
    top:30,
    left:30,
    width:100,
    height:100,
    fill:'red'
  })
  canvas.add(rect)
}
onMounted(() => {
  init()
})
</script>

<template>
  <div>
    <h2>fabric 基础</h2>
    <canvas ref="canRef" class="w-52 h-52 rounded-xl border-solid border-blue-400 border-2"></canvas>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
