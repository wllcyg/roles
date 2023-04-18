<script setup lang="ts">
import Appmain from "./module/Main.vue";
import NavHeader from "./module/NavHeader.vue";
import SlideBar from "./module/SlideBar.vue";
</script>
<template>
  <div class="flex justify-between w-full h-full">
    <SlideBar class="slide transition-all duration-3 w-53" />
    <section class="flex-1">
      <NavHeader />
      <Appmain />
    </section>
  </div>
</template>

<style scoped lang="less">

</style>
