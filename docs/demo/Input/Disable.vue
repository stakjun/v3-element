<template>
  <vk-input v-model="test" disabled />
</template>

<script setup>
import { ref } from 'vue';

const test = ref('some text');
</script>
