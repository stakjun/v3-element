<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <vk-tooltip content="Top Left prompts info" placement="top-start">
        <vk-button>top-start</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Top Center prompts info" placement="top">
        <vk-button>top</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Top Right prompts info" placement="top-end">
        <vk-button>top-end</vk-button>
      </vk-tooltip>
    </div>
    <div class="row">
      <vk-tooltip content="Left Top prompts info" placement="left-start">
        <vk-button>left-start</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Right Top prompts info" placement="right-start">
        <vk-button>right-start</vk-button>
      </vk-tooltip>
    </div>
    <div class="row">
      <vk-tooltip content="Left Center prompts info" placement="left">
        <vk-button class="mt-3 mb-3">left</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Right Center prompts info" placement="right">
        <vk-button>right</vk-button>
      </vk-tooltip>
    </div>
    <div class="row">
      <vk-tooltip content="Left Bottom prompts info" placement="left-end">
        <vk-button>left-end</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Right Bottom prompts info" placement="right-end">
        <vk-button>right-end</vk-button>
      </vk-tooltip>
    </div>
    <div class="row center">
      <vk-tooltip content="Bottom Left prompts info" placement="bottom-start">
        <vk-button>bottom-start</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Bottom Center prompts info" placement="bottom">
        <vk-button>bottom</vk-button>
      </vk-tooltip>
      <vk-tooltip content="Bottom Right prompts info" placement="bottom-end">
        <vk-button>bottom-end</vk-button>
      </vk-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
</style>
