<template>
  <vk-input v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </vk-input>

  <vk-input v-model="test" placeholder="prefix suffix">
    <template #prefix>
      <vk-icon icon="fa-user" />
    </template>
    <template #suffix>
      <vk-icon icon="fa-user" />
    </template>
  </vk-input>
</template>

<script setup>
import { ref } from 'vue';

const test = ref('');
</script>
