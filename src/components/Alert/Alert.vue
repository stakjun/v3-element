<template>
  <Transition name="vk-alert-fade">
    <div
      class="vk-alert"
      :class="{
        [`vk-alert--${type}`]: type,
        [`vk-alert--${effect}`]: effect
      }"
      v-if="alertShow"
    >
      <div class="vk-alert__content">
        <span><slot /></span>
      </div>
      <div class="vk-alert__close" v-if="closable" @click="closeAlert">
        <Icon icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/Icon/Icon.vue';
import type { AlertEmits, AlertProps } from './types';

defineOptions({
  name: 'VkAlert'
});

withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  effect: 'light',
  closable: true
});
const emits = defineEmits<AlertEmits>();

/** Alert展示状态 */
const alertShow = ref<boolean>(true);

/** 关闭 Alert */
const closeAlert = () => {
  alertShow.value = false;
  emits('close');
};
</script>
