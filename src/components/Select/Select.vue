<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
  >
    <Tooltip placement="bottom-start" manual ref="tooltipRef">
      <Input
        v-model="innerValue"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <template #content>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled
              }"
              :id="`select-item-${item.value}`"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../Input';
import Tooltip, { type TooltipInstance } from '../Tooltip';
import type { SelectEmits, SelectProps } from './types';

defineOptions({
  name: 'VkSelect'
});

const props = defineProps<SelectProps>();
const emits = defineEmits<SelectEmits>();

const innerValue = ref('');
/** 菜单是否打开 */
const isDropdownShow = ref(false);
const tooltipRef = ref<TooltipInstance | null>(null);

const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value?.show();
  } else {
    console.log(tooltipRef.value);
    tooltipRef.value?.hide();
  }
  isDropdownShow.value = show;
  emits('visible-change', show);
};
/** 点击展示/隐藏 */
const toggleDropdown = () => {
  if (props.disabled) {
    return;
  }
  if (isDropdownShow.value) {
    controlDropdown(false);
  } else {
    controlDropdown(true);
  }
};
</script>
