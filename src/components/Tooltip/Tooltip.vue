<template>
  <div class="vk-tooltip" v-on="outerEvents">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <div class="vk-tooltip__popper" ref="popperNode" v-if="isOpen">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import type { TooltipEmits, TooltipProps } from './types';
import { createPopper, type Instance } from '@popperjs/core';

defineOptions({
  name: 'VkTooltip'
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
});
const emits = defineEmits<TooltipEmits>();

/** 内容区域是否展示 */
const isOpen = ref(false);
/** 点击节点 */
const triggerNode = ref<HTMLElement | null>(null);
/** 内容节点 */
const popperNode = ref<HTMLElement | null>(null);
/** popper 实例 */
let popperInstance: null | Instance = null;

/** 打开 */
const open = () => {
  isOpen.value = true;
};
/** 关闭 */
const close = () => {
  isOpen.value = false;
};

/** 点击 trigger */
const togglePopper = () => {
  isOpen.value = !isOpen.value;
  emits('visible-change', isOpen.value);
};

/** 动态绑定事件 */
let events: Record<string, any> = reactive({});
let outerEvents: Record<string, any> = reactive({});
/** 绑定事件 */
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open;
    outerEvents['mouseleave'] = close;
  } else {
    events['click'] = togglePopper;
  }
};
attachEvents();

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

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {};
      outerEvents = {};
      attachEvents();
    }
  }
);
</script>
