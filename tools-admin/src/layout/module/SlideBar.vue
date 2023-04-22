<script lang="ts" setup>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const router = useRouter();
const slideBar = reactive(router.options.routes);
console.log(slideBar, "slideBarslideBarslideBar");
</script>
<template>
  <div class="bg-slide h-screen w-52 slidebar-wraper">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo "
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-5">
        <template #title>item four</template>
        <el-menu-item index="1-51">item one</el-menu-item>
        <el-menu-item index="1-52">item one</el-menu-item>
        <el-menu-item index="1-53">item one</el-menu-item>
        <el-menu-item index="1-54">item one</el-menu-item>
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
