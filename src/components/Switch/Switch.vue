<template>
  <div
    class="vk-switch"
    :class="{
      [`vk-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="switchValue"
  >
    <input
      class="vk-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
    />
    <div class="vk-switch__core">
      <div class="vk-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { SwitchEmits, SwitchProps } from './types';

defineOptions({
  name: 'VkSwitch',
  inheritAttrs: false
});

const props = defineProps<SwitchProps>();
const emits = defineEmits<SwitchEmits>();

const innerValue = ref(props.modelValue);
/** 是否被选中 */
const checked = computed(() => innerValue.value);
/** 切换 */
const switchValue = () => {
  if (props.disabled) {
    return;
  }
  innerValue.value = !checked.value;
  emits('change', innerValue.value);
  emits('update:modelValue', innerValue.value);
};
</script>
