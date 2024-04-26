<template>
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div class="vk-input__prepend" v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <div class="vk-input__wrapper">
        <!-- prefix slot -->
        <span class="vk-input__prefix" v-if="$slots.prefix">
          <slot name="prefix" />
        </span>
        <input :type="type" :disabled="disabled" class="vk-input__inner" />
        <!-- suffix slot -->
        <span class="vk-input__suffix" v-if="$slots.suffix">
          <slot name="suffix" />
        </span>
      </div>
      <!-- append slot -->
      <div class="vk-input__append" v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea class="vk-textarea__wrapper" :disabled="disabled"></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InputProps } from './types';

defineOptions({
  name: 'VkInput'
});

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text'
});
</script>
