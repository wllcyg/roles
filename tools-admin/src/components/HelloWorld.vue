<script setup lang="ts">
const props = defineProps({
  foo:{type:String,required:true}
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
