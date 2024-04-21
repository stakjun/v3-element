<template>
  <div class="vk-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div class="vk-tooltip__popper" ref="popperNode" v-if="isOpen">
        <slot name="content">{{ content }}</slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, watch } from 'vue';
import type { TooltipEmits, TooltipInstance, TooltipProps } from './types';
import { createPopper, placements, type Instance } from '@popperjs/core';
import useClickOutside from '@/hooks/useClickOutside';

defineOptions({
  name: 'VkTooltip'
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade'
});
const emits = defineEmits<TooltipEmits>();

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    ...props.popperOptions
  };
});

/** 内容区域是否展示 */
const isOpen = ref(false);
/** 点击节点 */
const triggerNode = ref<HTMLElement | null>(null);
/** 内容节点 */
const popperNode = ref<HTMLElement | null>(null);
/** 容器节点 */
const popperContainerNode = ref<HTMLElement | null>(null);
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

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close();
  }
});

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
if (!props.manual) {
  attachEvents();
}

watch(
  isOpen,
  (newVal) => {
    if (newVal) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(
          triggerNode.value,
          popperNode.value,
          popperOptions.value
        );
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

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {};
      outerEvents = {};
    } else {
      attachEvents();
    }
  }
);

onUnmounted(() => {
  popperInstance?.destroy();
});

defineExpose<TooltipInstance>({
  show: open,
  hide: close
});
</script>
