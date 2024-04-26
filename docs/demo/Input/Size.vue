<template>
  <div class="size-holder">
    <vk-input v-model="test" placeholder="大的 Input" size="large"></vk-input>
    <vk-input v-model="test" placeholder="普通的 Input"></vk-input>
    <vk-input v-model="test" placeholder="小的 Input" size="small"></vk-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const test = ref('');
</script>

<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>
