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
        <input
          :type="type"
          :disabled="disabled"
          class="vk-input__inner"
          @input="handleInput"
        />
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
      <textarea
        class="vk-textarea__wrapper"
        :disabled="disabled"
        @input="handleInput"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { InputEmits, InputProps } from './types';

defineOptions({
  name: 'VkInput'
});

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text'
});
const emits = defineEmits<InputEmits>();

const innerValue = ref(props.modelValue);

const handleInput = () => {
  emits('update:modelValue', innerValue.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>
