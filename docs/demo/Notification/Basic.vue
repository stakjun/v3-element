<template>
  <vk-button plain @click="open1">Closes automatically</vk-button>
  <vk-button plain @click="open2">Won't close automatically</vk-button>
</template>

<script setup>
import { h } from 'vue';
import { createNotification } from '@/components/Notification';

const open1 = () => {
  createNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder')
  });
};

const open2 = () => {
  createNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0
  });
};
</script>
