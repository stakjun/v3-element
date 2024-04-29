<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
  >
    <Tooltip placement="bottom-start" manual ref="tooltipRef">
      <Input
        v-model="state.inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <template #content>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-selected': state.selectedOption?.value === item.value,
                'is-disabled': item.disabled
              }"
              :id="`select-item-${item.value}`"
              @clic.stop="itemClick(item)"
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
import { computed, reactive, ref } from 'vue';
import Input from '../Input';
import Tooltip, { type TooltipInstance } from '../Tooltip';
import type {
  SelectEmits,
  SelectOption,
  SelectProps,
  SelectState
} from './types';

defineOptions({
  name: 'VkSelect'
});

const props = defineProps<SelectProps>();
const emits = defineEmits<SelectEmits>();

const tooltipRef = ref<TooltipInstance | null>(null);

/** 菜单是否打开 */
const isDropdownShow = ref(false);

/** 根据 modelValue 找到初始的 option */
const initialOption = computed(() => {
  const option = props.options.find(
    (option) => option.value === props.modelValue
  );
  return option || null;
});
/** input 的值和 选中的 option */
const state: SelectState = reactive({
  inputValue: initialOption.value?.label || '',
  selectedOption: initialOption.value
});

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

/** 点击菜单项 */
const itemClick = (item: SelectOption) => {
  if (item.disabled) {
    return;
  }
  state.inputValue = item.label;
  state.selectedOption = item;
  emits('change', item.value);
  emits('update:modelValue', item.value);
  controlDropdown(false);
};
</script>
