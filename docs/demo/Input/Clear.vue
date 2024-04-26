<template>
  <vk-input v-model="test" clearable placeholder="输入字符以后可以点击清空" />
</template>

<script setup>
import { ref } from 'vue';

const test = ref('');
</script>
