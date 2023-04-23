<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  foo:{type:String,required:true}
})
</script>

<template>
  <div>
    我是firJs页面
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
