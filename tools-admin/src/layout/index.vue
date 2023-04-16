<script  lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  foo:{type:String}
})
console.log(props)
</script>

<template>
  <div class="layout-wraper">
    平面的
  </div>
</template>

<style scoped>

</style>
