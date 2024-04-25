<template>
  <vk-button plain @click="open">Hide close button</vk-button>
</template>

<script lang="ts" setup>
import { createNotification } from '@/components/Notification';

const open = () => {
  createNotification({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
    duration: 0
  });
};
</script>
