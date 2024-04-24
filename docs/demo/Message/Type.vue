<template>
  <div class="basic block">
    <vk-button @click="open('success')">Success</vk-button>
    <vk-button @click="open('info')">Info</vk-button>
    <vk-button @click="open('warning')">warning</vk-button>
    <vk-button @click="open('danger')">Danger</vk-button>
  </div>
</template>

<script setup>
import { createMessage } from '@/components/Message';

const open = (type) => {
  createMessage({ message: 'hello world', type });
};
</script>
