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
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
