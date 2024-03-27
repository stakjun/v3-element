<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${size}`]: size,
      [`vk-button--${type}`]: type,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue';
import type { ButtonProps } from './types'

defineOptions({
  name: 'VkButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement | null>(null)
defineExpose({
  ref: _ref
})
</script>

