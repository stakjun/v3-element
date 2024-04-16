<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import {
  collapseContextKey,
  type CollapseEmits,
  type CollapseProps,
  type NameType
} from './types';

defineOptions({
  name: 'VkCollapse'
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

/** 当前打开项的集合 */
const activeNames = ref<NameType[]>(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one active item');
}
/** 点击子项 */
const handleItemClick = (name: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? '' : name];
  } else {
    const index = activeNames.value.indexOf(name);
    if (index > -1) {
      // 存在，删除
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(name);
    }
  }
  emits('update:modelValue', activeNames.value);
  emits('change', activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick
});

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue;
  }
);
</script>
