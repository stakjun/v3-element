<template>
  <vk-input
    v-model="test"
    placeholder="可以是一个 Textarea"
    type="textarea"
  ></vk-input>
</template>

<script setup>
import { ref } from 'vue';

const test = ref('');
</script>
