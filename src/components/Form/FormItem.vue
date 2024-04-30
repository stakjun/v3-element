<template>
  <div class="vk-form-item">
    <label class="vk-form-item__label">
      <slot name="label" :label="label">{{ label }}</slot>
    </label>
    <div class="vk-form-item__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormItemProps } from './types';

defineOptions({
  name: 'VkFormItem'
});

defineProps<FormItemProps>();
</script>
