<template>
  <div class="vk-tooltip">
    <div class="vk-tooltip__trigger" ref="triggerNode" @click="togglePopper">
      <slot />
    </div>
    <div class="vk-tooltip__popper" ref="popperNode" v-if="isOpen">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { TooltipEmits, TooltipProps } from './types';
import { createPopper, type Instance } from '@popperjs/core';

defineOptions({
  name: 'VkTooltip'
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'right'
});
const emits = defineEmits<TooltipEmits>();

/** 内容区域是否展示 */
const isOpen = ref(false);
/** 点击节点 */
const triggerNode = ref<HTMLElement | null>(null);
/** 内容节点 */
const popperNode = ref<HTMLElement | null>(null);

let popperInstance: null | Instance = null;

/** 点击 trigger */
const togglePopper = () => {
  isOpen.value = !isOpen.value;
  emits('visible-change', isOpen.value);
};

watch(
  isOpen,
  (newVal) => {
    if (newVal) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement
        });
      } else {
        popperInstance?.destroy();
      }
    }
  },
  { flush: 'post' }
);
</script>
