<template>
  <vk-input v-model="test" placeholder="密码文本框，可以切换" showPassword />
</template>

<script setup>
import { ref } from 'vue';

const test = ref('');
</script>
