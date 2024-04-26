<template>
  <vk-input v-model="test" placeholder="基础文本框，请输入" />
  <span>{{ test }}</span>
</template>

<script setup>
import { ref } from 'vue';

const test = ref('');
</script>
