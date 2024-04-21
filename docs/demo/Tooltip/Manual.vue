<template>
  <div class="basic block">
    <vk-tooltip content="hello tooltip" ref="tooltipRef" manual>
      <vk-button>手动容器</vk-button>
    </vk-tooltip>

    <br />
    <br />
    <vk-button type="primary" @click="open">点击手动触发显示</vk-button>
    <vk-button type="danger" @click="close">点击手动触发隐藏</vk-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tooltipRef = ref();
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
</script>
