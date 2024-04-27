<template>
  <div class="switch-size-container">
    <vk-switch v-model="test" size="large" />
    <vk-switch v-model="test" />
    <vk-switch v-model="test" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const test = ref(false);
</script>

<style scoped>
.switch-size-container {
  display: flex;
  align-items: center;

  .vk-switch {
    margin-right: 10px;
  }
}
</style>
