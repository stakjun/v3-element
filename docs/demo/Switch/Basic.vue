<template>
  <vk-switch v-model="test" />
</template>

<script setup>
import { ref } from 'vue';

const test = ref(false);
</script>
