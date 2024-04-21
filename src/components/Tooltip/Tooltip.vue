<template>
  <div class="vk-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div
        class="vk-tooltip__popper"
        ref="popperNode"
        v-if="isOpen"
        @mouseenter="openFinal"
      >
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, watch } from 'vue';
import type { TooltipEmits, TooltipInstance, TooltipProps } from './types';
import { createPopper, type Instance } from '@popperjs/core';
import useClickOutside from '@/hooks/useClickOutside';
import { debounce } from 'lodash-es';

defineOptions({
  name: 'VkTooltip'
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 50,
  closeDelay: 50
});
const emits = defineEmits<TooltipEmits>();

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ],
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
  emits('visible-change', true);
};
/** 关闭 */
const close = () => {
  isOpen.value = false;
  emits('visible-change', false);
};

const openDebounce = debounce(open, props.openDelay);
const closeDebounce = debounce(close, props.closeDelay);

const openFinal = () => {
  closeDebounce.cancel();
  openDebounce();
};
const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce();
};

/** 点击 trigger */
const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal();
  }
});

/** 动态绑定事件 */
let events: Record<string, any> = reactive({});
let outerEvents: Record<string, any> = reactive({});
/** 绑定事件 */
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal;
    outerEvents['mouseleave'] = closeFinal;
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
  show: openFinal,
  hide: closeFinal
});
</script>
