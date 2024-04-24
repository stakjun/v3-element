<template>
  <Transition
    :name="transitionName"
    @after-leave="destroyComponent"
    @enter="updateHeight"
  >
    <div
      v-show="visible"
      ref="messageRef"
      role="alert"
      class="vk-message"
      :class="{
        [`vk-message--${type}`]: type,
        'is-close': showClose
      }"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="vk-message__content">
        <slot><RenderVnode :vNode="message" v-if="message" /></slot>
      </div>
      <div class="vk-message__close" v-if="showClose">
        <Icon @click.stop="visible = false" icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import RenderVnode from '../Common/RenderVnode';
import Icon from '@/components/Icon';
import type { MessageProps } from './types';
import { getLastBottomOffset } from './method';
import useEventListener from '@/hooks/useEventListener';

defineOptions({
  name: 'VkMessage'
});

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'fade-up'
});

/** 是否显示 */
const visible = ref(false);

/**
 * 每个 Message 组件的位置 top 等于上一个组件的 bottom + offset
 * 每个 Message 组件的位置 bottom 等于该组件的 top + height
 */
const messageRef = ref<HTMLDivElement | null>(null);
/** 高度 */
const height = ref(0);
/** 上一个实例的 bottom，第一个是 0 */
const lastOffset = computed(() => getLastBottomOffset(props.id));
/** 该元素的 top */
const topOffset = computed(() => lastOffset.value + props.offset);
/** 该元素的 bottom */
const bottomOffset = computed(() => topOffset.value + height.value);
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex
}));

let timer: any;
/** 弹窗关闭倒计时 */
const startTimer = () => {
  if (props.duration === 0) {
    return;
  }
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
};
/** 清楚倒计时 */
const clearTimer = () => {
  clearTimeout(timer);
};

/** 支持 Esc 按键关闭弹窗 */
const keydown = (e: Event) => {
  const event = e as KeyboardEvent;
  if (event.code === 'Escape') {
    visible.value = false;
  }
};
useEventListener(document, 'keydown', keydown);

onMounted(() => {
  visible.value = true;
  startTimer();
});

/** Transtion 动画效果不会生效，因为这里动画还没生效组件就被销毁了，可以放在 Transtion 提供的钩子函数 after-leave  */
// watch(visible, (newValue) => {
//   if (!newValue) {
//     props.onDestroy();
//   }
// });
const destroyComponent = () => {
  props.onDestroy();
};
/** 更新高度 */
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
};

defineExpose({
  bottomOffset,
  visible
});
</script>

<style>
.vk-message {
  width: max-content;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid blue;
  z-index: 2011;
}
</style>
