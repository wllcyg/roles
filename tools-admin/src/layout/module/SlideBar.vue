<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
const router = useRouter()
const route = useRoute()
const slideBar = reactive(router.options.routes)
const activeIndex = ref('/')
onMounted(() => {
  console.log(router.options)
  activeIndex.value = router.options.history.location
  if(router.options.history.location === '/dashbord'){
    activeIndex.value = '/'
  }
})

const toView = (el) => {
  activeIndex.value = el.index
  router.push(el.index)
}
</script>
<template>
  <!-- 目前先支持一层目录结构 -->
  <div class="bg-slide h-screen w-52 slidebar-wraper">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
    >
      <ul
        v-for="(item) in slideBar"
        :key="item.meta.title.id"
      >
        <el-menu-item
          :index="item.path"
          v-if="!item.issubWrap"
          @click="toView"
        >
          <el-icon>
            <component :is='item.meta.icon' />
          </el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
        <el-sub-menu
          :index="item.meta.id"
          v-if="item.issubWrap"
        >
          <template #title>
            <el-icon>
              <component :is='item.meta.icon' />
            </el-icon>
            <span>{{item.meta.title}}</span>
          </template>
          <div class="isOpend">
            <el-menu-item
              @click="toView"
              :index="i.path"
              v-for="(i) in item.children"
              :key="i.meta.id"
            >{{i.meta.title}}</el-menu-item>
          </div>
        </el-sub-menu>
      </ul>
    </el-menu>
  </div>
</template>
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
.isOpend {
  background-color: #1f2d3d;
}
</style>
