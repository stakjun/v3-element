<template>
  <Transition
    name="vk-notification-fade"
    @enter="updateHeight"
    @after-leave="destroyComponent"
  >
    <div
      ref="notificationRef"
      v-show="visible"
      class="vk-notification"
      :class="{
        [`vk-notification--${type}`]: type,
        'is-close': showClose
      }"
      role="alert"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <Icon class="vk-notification__icon" :icon="iconName" />
      <div class="vk-notification__text">
        <div class="vk-notification__title">{{ title }}</div>
        <div class="vk-notification__content">
          <RenderVnode :v-node="message" />
        </div>
      </div>
      <div class="vk-notification__close" v-if="showClose">
        <Icon icon="xmark" @click.stop="visible = false" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Icon from '../Icon';
import RenderVnode from '../Common/RenderVnode';
import type { NotificationProps } from './types';
import useEventListener from '@/hooks/useEventListener';
import { getLastBottomOffset } from './method';

defineOptions({
  name: 'VkNotification'
});

const props = withDefaults(defineProps<NotificationProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  showClose: true
});

/** 左侧图标 */
const iconName = computed(() => {
  if (props.icon) {
    return props.icon;
  }
  switch (props.type) {
    case 'info':
      return 'circle-info';
    case 'warning':
      return 'circle-exclamation';
    case 'danger':
      return 'circle-xmark';
    case 'success':
      return 'circle-check';
    default:
      return 'circle-info';
  }
});

/** 是否显示 */
const visible = ref(false);

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

/**
 * 每个 Notification 组件的位置 top 等于上一个组件的 bottom + offset
 * 每个 Notification 组件的位置 bottom 等于该组件的 top + height
 */
const notificationRef = ref<HTMLDivElement | null>(null);
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

/** 更新高度 */
const updateHeight = () => {
  height.value = notificationRef.value!.getBoundingClientRect().height;
};

const destroyComponent = () => {
  props.onDestroy();
};

onMounted(() => {
  visible.value = true;
  startTimer();
});

defineExpose({
  bottomOffset,
  visible
});
</script>
