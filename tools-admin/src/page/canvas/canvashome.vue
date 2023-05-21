<script lang="ts" setup>
let carimage = new URL('../../assets/car.jpg', import.meta.url).href
let displayImg = new URL('../../assets/displacement.jpg', import.meta.url).href
import { onMounted } from 'vue'
import * as PIXI from 'pixi.js'
// 引入震波滤镜
import { ShockwaveFilter } from 'pixi-filters'
import { appendFile } from 'fs'
const init = () => {
  const el =document.querySelector('.can-wrap')
  let width = 800
  let height = 400

  const app = new PIXI.Application<HTMLCanvasElement>({
    width,
    height,
    backgroundColor:0x1099bb,
    resolution:window.devicePixelRatio || 1,
    antialias:true
  })
  el.appendChild(app.view)
  // 创建纹理
  const texture = PIXI.Texture.from(carimage)
  // 创建一个精灵
  const sprite = new PIXI.Sprite(texture)
  sprite.width = width
  sprite.height = height

  // 创建一个容器来存放
  const container = new PIXI.Container()
  container.addChild(sprite)
  app.stage.addChild(container)
  // 添加文字
  const text = new PIXI.Text('Hello world',{
    fontFamily:'Arial',
    fontSize:50,
    fill:0xffffff,
    align:'center',
    dropShadow:true,
    dropShadowColor:'#000000',
    dropShadowBlur:4,
    dropShadowAlpha:Math.PI / 2,
    dropShadowDistance:2 // 阴影厚度
  })
  text.x = app.screen.width / 2
  text.y = app.screen.height / 2
  text.anchor.set(0.5)
  container.addChild(text)
  // 添加置换滤镜
  const displacementScrite = PIXI.Sprite.from(displayImg)
  displacementScrite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
  const displancementFilter = new PIXI.DisplacementFilter(displacementScrite)
  container.addChild(displacementScrite)
  // 添加震波滤镜
  const shockwaveFilter1 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 80, // 半径
      amplitude: 40, // 振幅
      speed: 200,
      wavelength:40
    },
    0
  )

  const shockwaveFilter2 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 100, // 半径
      wavelength: 45, // 波长
      amplitude: 80, // 振幅
      speed: 240
    },
    0
  )

  const shockwaveFilter3 = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    {
      radius: 160, // 半径
      wavelength: 65, // 波长
      amplitude: 105, // 振幅
      speed: 300
    },
    0
  )

  container.filters = [displancementFilter,shockwaveFilter1,shockwaveFilter2,shockwaveFilter3]
  app.ticker.add((del) => {
    displacementScrite.x += 1
    displacementScrite.y += 1
    createWave(shockwaveFilter1, 1,app)
    createWave(shockwaveFilter2, 1.2,app)
    createWave(shockwaveFilter3, 0.7,app)

  })
  // 点击添加滤镜
  app.view.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY)
    shockwaveFilter3.center = [e.clientX, e.clientY]
    shockwaveFilter3.time = 0
  })
}

function createWave(filters: ShockwaveFilter,resttime: number,app: PIXI.Application<HTMLCanvasElement>) {
  filters.time += 0.01
  if(filters.time > resttime){
    filters.time = 0
    filters.center = [
      Math.random() * app.screen.width,
      Math.random() * app.screen.width
    ]
  }
}
onMounted(() => {
  init()
})
</script>
<template>
    <div class="can-wrap">

    </div>
</template>

<style scoped lang="scss">
.can-wrap{
    width: 100%;
    height: 100vh;
}
</style>
