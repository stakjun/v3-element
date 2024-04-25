<template>
  <vk-button type="primary" @click="open">创建一条带图标的通知</vk-button>
</template>

<script setup>
import { createNotification } from '@/components/Notification';

const open = () => {
  createNotification({
    title: 'this is the title',
    message: 'hello world',
    icon: 'star'
  });
};
</script>
