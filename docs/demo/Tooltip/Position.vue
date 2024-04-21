<template>
  <div class="basic block">
    <vk-tooltip content="hello vk-tooltip" placement="top-start">
      <vk-button>top-start</vk-button>
    </vk-tooltip>

    <vk-tooltip content="hello vk-tooltip" placement="bottom-start">
      <vk-button>bottom-start</vk-button>
    </vk-tooltip>

    <vk-tooltip content="hello vk-tooltip" placement="left-start">
      <vk-button>left-start</vk-button>
    </vk-tooltip>

    <vk-tooltip content="hello vk-tooltip" placement="right-start">
      <vk-button>right-start</vk-button>
    </vk-tooltip>
  </div>
</template>

<style scoped>
.vk-button {
  margin-right: 20px;
}
</style>
