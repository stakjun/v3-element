<template>
  <div class="vk-dropdown">
    <Tooltip
      ref="tooltipRef"
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChange"
    >
      <slot />
      <template #content>
        <ul class="vk-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li
              v-if="item.divided"
              role="separator"
              class="divided-placeholder"
            />
            <li
              class="vk-dropdown__item"
              :class="{
                'is-disabled': item.disabled,
                'is-divided': item.divided
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
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
import type { TooltipInstance } from '../Tooltip';
import Tooltip from '../Tooltip/Tooltip.vue';
import type {
  DropdownEmits,
  DropdownInstance,
  DropdownProps,
  MenuOption
} from './types';

defineOptions({
  name: 'VkDropdown'
});

defineProps<DropdownProps>();
const emits = defineEmits<DropdownEmits>();

/** Tooltip 实例 */
const tooltipRef = ref<TooltipInstance | null>(null);

const visibleChange = (value: boolean) => {
  emits('visible-change', value);
};
/** 选择子项 */
const itemClick = (item: MenuOption) => {
  if (item.disabled) {
    return;
  }
  emits('select', item);
};

defineExpose<DropdownInstance>({
  show: tooltipRef.value?.show!,
  hide: tooltipRef.value?.hide!
});
</script>
