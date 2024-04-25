<template>
  <vk-button plain @click="open1">Success</vk-button>
  <vk-button plain @click="open2">Warning</vk-button>
  <vk-button plain @click="open3">Info</vk-button>
  <vk-button plain @click="open4">Error</vk-button>
</template>

<script lang="ts" setup>
import { createNotification } from '@/components/Notification';

const open1 = () => {
  createNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success'
  });
};

const open2 = () => {
  createNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning'
  });
};

const open3 = () => {
  createNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info'
  });
};

const open4 = () => {
  createNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'danger'
  });
};
</script>
