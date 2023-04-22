<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const key = computed<string>(() => {
  return route.path
})
</script>
<template>
  <section class="w-full px-4 py-4">
    <router-view v-slot={Component}>
      <transition>
        <component :is="Component" :key="key"/>
      </transition>
    </router-view>
  </section>
</template>

<style scoped lang="less">
</style>
