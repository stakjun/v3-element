<template>
  <div class="basic block">
    <vk-button type="primary" @click="open">创建一条消息</vk-button>
    <vk-button @click="open2">创建支持 VNode 的消息</vk-button>
  </div>
</template>

<script setup>
import { h } from 'vue';
import { createMessage } from '@/components/Message';

const open = () => {
  createMessage({ message: 'hello world' });
};
const open2 = () => {
  createMessage({ message: h('b', 'this is bold') });
};
</script>
