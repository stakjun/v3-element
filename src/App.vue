<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Button from './components/Button/Button.vue'

const buttonRef = ref<InstanceType<typeof Button> | null>(null);

onMounted(() => {
  console.log(buttonRef.value?.ref)
})
</script>

<template>
  <a href="">link</a>
  <Button type="primary" disabled plain ref="buttonRef">Test</Button>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
</template>