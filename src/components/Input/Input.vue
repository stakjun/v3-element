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
          v-model="innerValue"
          :type="type"
          :disabled="disabled"
          class="vk-input__inner"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- suffix slot -->
        <span class="vk-input__suffix" v-if="$slots.suffix || showClear">
          <slot name="suffix" />
          <Icon
            v-if="showClear"
            icon="circle-xmark"
            class="vk-input__clear"
            @click="clear"
          />
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
        v-model="innerValue"
        class="vk-textarea__wrapper"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { InputEmits, InputProps } from './types';
import Icon from '../Icon';

defineOptions({
  name: 'VkInput'
});

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text'
});
const emits = defineEmits<InputEmits>();

/** 输入框的值 */
const innerValue = ref(props.modelValue);
/** 是否聚焦 */
const isFocus = ref(false);
/** 展示清除按钮 */
const showClear = computed(
  () => props.clearable && !props.disabled && innerValue.value && isFocus.value
);

const handleInput = () => {
  emits('update:modelValue', innerValue.value);
};
const handleFocus = () => {
  isFocus.value = true;
};
const handleBlur = () => {
  isFocus.value = false;
};
/** 清除 */
const clear = () => {
  innerValue.value = '';
  emits('update:modelValue', innerValue.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>
