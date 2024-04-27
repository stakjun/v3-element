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
      ref="inputRef"
      class="vk-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="vk-switch__core">
      <div class="vk-switch__core-inner">
        <span
          v-if="activeText || inactiveText"
          class="vk-switch__core-inner-text"
        >
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="vk-switch__core-action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { SwitchEmits, SwitchProps } from './types';

defineOptions({
  name: 'VkSwitch',
  inheritAttrs: false
});

const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false
});
const emits = defineEmits<SwitchEmits>();

const inputRef = ref<HTMLInputElement | null>(null);

const innerValue = ref(props.modelValue);
/** 是否被选中 */
const checked = computed(() => innerValue.value === props.activeValue);
/** 切换 */
const switchValue = () => {
  if (props.disabled) {
    return;
  }
  const newValue = checked.value ? props.inactiveValue : props.activeValue;
  innerValue.value = newValue;
  emits('change', newValue);
  emits('update:modelValue', newValue);
};

onMounted(() => {
  inputRef.value!.checked = checked.value;
});

watch(checked, (val) => {
  inputRef.value!.checked = val;
});

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>
