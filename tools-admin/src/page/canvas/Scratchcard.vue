<script  lang="ts" setup>
let mujian = new URL('../../assets/mujian.png', import.meta.url).href
let maskimage = new URL('../../assets/bg.png', import.meta.url).href

import { fa } from 'element-plus/es/locale'
import * as PIXI from 'pixi.js'
import { onMounted,ref} from 'vue'
const init = () => {
  const app = new PIXI.Application<HTMLCanvasElement>({
    width:500,
    height:300,
    backgroundColor:0x1099bb,
    resolution:window.devicePixelRatio || 1,
    antialias:true// 抗锯齿
  })
  document.querySelector('.pixi-wrap').appendChild(app.view)
  // 创建矩形
  const rectange = new PIXI.Graphics()
  rectange.beginFill(0x66cff)
  rectange.lineStyle(4,0xff0000,1)// 边框需要在绘制之前完成
  rectange.drawRect(0,0,64,64)
  rectange.endFill()
  rectange.scale.set(0.5,0.5)
  rectange.position.set(50,50) // 位置
  rectange.rotation = 0.5 // 旋转
  rectange.pivot.set(25,25)// 设置旋转中心
  app.stage.addChild(rectange)
  // 绘制圆形
  const circle = new PIXI.Graphics()
  circle.beginFill(0xff0000,0.9)
  circle.drawCircle(16,16,16)// 位置跟直径
  circle.endFill()
  app.stage.addChild(circle)
  // 创建一个纹理
  const texture = PIXI.Texture.from(mujian)
  // 创建一个精灵
  const sprite = new PIXI.Sprite(texture)
  // 设置锚点
  sprite.anchor.set(0.5,0.5)
  // 旋转45度
  sprite.rotation = Math.PI / 4
  // 设置位置
  sprite.x = 100
  sprite.y = 200
  // 创建模糊滤镜
  const blureFilter = new PIXI.BlurFilter()
  blureFilter.blur = 20
  sprite.filters = [blureFilter]
  app.stage.addChild(sprite)
  // 事件交互
  sprite.interactive = true

  const israte = ref(false)
  let tiker = app.ticker.add(del => {
    if(israte.value){
      sprite.rotation += 0.01*del
    }
  })
  app.ticker.autoStart = false
  sprite.on('mouseenter', () => {
    israte.value = true
    blureFilter.blur = 0
    tiker.start()
  })
  sprite.on('mouseleave', () => {
    israte.value = false
    blureFilter.blur = 1
    tiker.stop()
  })
  tiker.autoStart = false
  // 使用容器来添加管理图片
  // Text是添加文字
  const text = new PIXI.Text('大保健',{
    fontSize:30,
    align:'center',
    fill:0xff0000
  })
  text.x = 80
  text.y = 20
  text.anchor.set(0.5)
  // app.stage.addChild(text)
  // 创建一个图片精灵
  const mask = PIXI.Sprite.from(maskimage)
  mask.width = app.screen.width
  mask.height = app.screen.height
  mask.mask = text
  app.stage.addChild(mask)
}
onMounted(() => {
  init()
})
</script>

<template>
  <div class="pixi-wrap">
  </div>
</template>

<style scoped lang="less">

</style>
