<template>
  <div class="basic block">
    <vk-dropdown
      placement="bottom"
      :menu-options="options"
      trigger="click"
      manual
      ref="tooltipRef"
    >
      <vk-button>菜单容器</vk-button>
    </vk-dropdown>
    <br />
    <br />
    <vk-button type="primary" @click="open">点击手动触发显示</vk-button>
    <vk-button type="danger" @click="close">点击手动触发隐藏</vk-button>
  </div>
</template>

<script setup>
import { h, ref } from 'vue';

const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
];
const tooltipRef = ref();
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
</script>
