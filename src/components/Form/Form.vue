<template>
  <form class="vk-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { formContextKey, type FormProps } from './types';

defineOptions({
  name: 'VkForm'
});

const props = defineProps<FormProps>();

provide(formContextKey, props);
</script>
