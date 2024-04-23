<template>
  <div
    v-show="visible"
    role="alert"
    class="vk-message"
    :class="{
      [`vk-message--${type}`]: type,
      'is-close': showClose
    }"
  >
    <div class="vk-message__content">
      <slot><RenderVnode :vNode="message" v-if="message" /></slot>
    </div>
    <div class="vk-message__close" v-if="showClose">
      <Icon @click.stop="visible = false" icon="xmark" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RenderVnode from '../Common/RenderVnode';
import Icon from '@/components/Icon';
import type { MessageProps } from './types';

defineOptions({
  name: 'VkMessage'
});

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000
});

/** 是否显示 */
const visible = ref(false);

/** 弹窗关闭倒计时 */
const startTimer = () => {
  if (props.duration === 0) {
    return;
  }
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
};

onMounted(() => {
  visible.value = true;
  startTimer();
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
