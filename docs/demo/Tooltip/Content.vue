<template>
  <div class="basic block">
    <vk-tooltip trigger="click">
      <vk-button>复杂 HTML 结构的 tooltip</vk-button>
      <template #content>
        <h3>this is the title</h3>
        <p>this is the content</p>
      </template>
    </vk-tooltip>
  </div>
</template>
