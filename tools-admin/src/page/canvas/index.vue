<script setup lang="ts">
import {onMounted, ref} from 'vue'
const props = defineProps({
  foo:{type:String,required:true}
})
const canvas1 = ref(null)
const initCan = () => {
  let ctx = canvas1.value.getContext('2d')
  // 绘制矩形(位置X,Y,长度X,高度Y)
  //填充模式
  ctx.fillRect(20,20,100,100)
  // 路径模式
  ctx.strokeRect(140,20,100,100)
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
