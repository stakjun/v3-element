<template>
  <vk-switch v-model="test" activeText="ON" inactiveText="OFF" />
</template>
<script setup>
import { ref } from 'vue';

const test = ref(false);
</script>
