<template>
  <div class="basic block">
    <vk-dropdown placement="bottom" :menu-options="options" trigger="click">
      <vk-button type="primary">点击触发下拉菜单</vk-button>
    </vk-dropdown>
  </div>
</template>

<script setup>
import { h } from 'vue';

const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
];
</script>
