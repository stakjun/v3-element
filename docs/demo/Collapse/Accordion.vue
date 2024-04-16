<template>
  <div class="basic block">
    <vk-collapse v-model="openedValue" accordion>
      <vk-collapse-item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </vk-collapse-item>
      <vk-collapse-item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </vk-collapse-item>
      <vk-collapse-item name="c" title="Title C">
        <div>this is cccc test</div>
      </vk-collapse-item>
    </vk-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openedValue = ref(['a']);
</script>
