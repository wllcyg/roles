<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'

const router = useRouter()
const slideBar = reactive(router.options.routes)
console.log(slideBar, 'slideBarslideBarslideBar')
</script>
<template>
  <div class="bg-slide h-screen w-52 slidebar-wraper">
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
  </el-menu>
  </div>
</template>
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
