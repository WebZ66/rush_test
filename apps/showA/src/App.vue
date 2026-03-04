<template>
  <div>
    我是APP根组件
    <button @click="goTo">点击</button>
    <router-view></router-view>
    <div id="micro-app"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()
const goTo = () => {
  router.push({
    name:'mircroList'
  })
}
</script>

<style scoped></style>
