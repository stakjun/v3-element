<template>
  <div class="basic block">
    <vk-button @click="open">可关闭消息</vk-button>
  </div>
</template>

<script setup>
import { createMessage } from '@/components/Message';

const open = () => {
  createMessage({ message: 'hello world', showClose: true, duration: 0 });
};
</script>
