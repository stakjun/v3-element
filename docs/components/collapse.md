---
title: Collapse 折叠面板
description: Collapse 组件文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 基础用法

可同时展开多个面板，面板之间不影响

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="Collapse 组件的手风琴效果"></preview>

## Collapse API

### 属性

| 属性名                | 说明           | 类型                      | 默认值 |
| :-------------------- | :------------- | :------------------------ | :----- |
| model-value / v-model | 当前活动面板   | `Array<string \| number>` | []     |
| accordion             | 是否手风琴模式 | `boolean`                 | false  |

### 事件

| 事件名 | 描述             | 类型                                |
| :----- | :--------------- | :---------------------------------- |
| change | 切换当前活动面板 | `(Array<string \| number>) => void` |

### 插槽

| 插槽名  | 说明           | 子标签        |
| :------ | :------------- | :------------ |
| default | 自定义默认内容 | Collapse Item |

## Collapse Item API

### 属性

| 属性名   | 说明       | 类型               | 默认值 |
| :------- | :--------- | :----------------- | :----- |
| name     | 唯一标志符 | `string \| number` | -      |
| title    | 面板标题   | `string`           | -      |
| disabled | 是否禁用   | `boolean`          | false  |

### 插槽

| 插槽名  | 说明                 |
| :------ | :------------------- |
| default | Collapse Item 的内容 |
| title   | Collapse Item 的标题 |
