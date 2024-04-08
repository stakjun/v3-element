# v3-element

基于 Vue3 + TypeScript 开发的组件库，文档地址：[https://stakjun.github.io/v3-element/](https://stakjun.github.io/v3-element/)

## 安装

```sh
npm i v3-element
```

## 使用

### 全局使用

```ts
// main.ts
// 引入所有组件
import V3Element from 'v3-element';
// 引入样式
import 'v3-element/dist/index.css';

import App from './App.vue';
// 全局使用
createApp(App).use(V3Element).mount('#app');
```

```vue
<template>
	<vk-button type="primary">我是 VkButton</vk-button>
</template>
```

### 按需导入

```ts
// main.ts
// 引入样式
import 'v3-element/dist/index.css';
```

```vue
<template>
	<vk-button type="primary">我是 VkButton</vk-button>
</template>

<script setup lang="ts">
import { VkButton } from 'v3-element';
</script>
```

## 本地运行 vitepress 组件文档

```sh
npm run docs:dev
```
