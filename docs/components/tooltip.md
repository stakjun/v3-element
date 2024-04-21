---
title: Tooltip 文字提示
description: Tooltip 组件文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 `content` 属性来决定 `hover` 时的提示信息。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 不同位置

由 `placement` 属性决定展示效果： `placement` 属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空

<preview path="../demo/Tooltip/Position.vue" title="不同位置" description="Tooltip 组件的不同位置"></preview>

## 触发方式

由 `trigger` 属性决定触发方式： `hover` | `click`, 默认为 `hover`

<preview path="../demo/Tooltip/Trigger.vue" title="触发方式" description="Tooltip 组件的触发方式"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 `slot content`，替代 `tooltip` 中的 `content` 属性。

<preview path="../demo/Tooltip/Content.vue" title="更多内容的文字提示" description="Tooltip 组件的更多内容的文字提示"></preview>

## 手动触发

将 `manual` 属性设置为 `true` 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

<preview path="../demo/Tooltip/Manual.vue" title="手动触发" description="Tooltip 组件的手动触发"></preview>

## API

### 属性

| 属性名         | 说明                                             | 类型                                                                                                                                                                         | 默认值 |
| :------------- | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| content        | 显示的内容，也可被 slot#content 覆盖             | `string`                                                                                                                                                                     | -      |
| placement      | Tooltip 组件出现的位置                           | `enum` - `'top'\| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom |
| transition     | 动画名称                                         | `string`                                                                                                                                                                     | fade   |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` 请参考 [popper.js](https://popper.js.org/docs/v2/) 文档                                                                                                             | {}     |
| trigger        | 如何触发 Tooltip                                 | `enum` - `'hover'\| 'click'`                                                                                                                                                 | hover  |
| open-delay     | 在触发后多久显示内容，单位毫秒                   | `number`                                                                                                                                                                     | 50     |
| close-delay    | 延迟关闭，单位毫秒                               | `number`                                                                                                                                                                     | 50     |
| manual         | 是否开启手动触发模式                             | `boolean`                                                                                                                                                                    | false  |

### 事件

| 事件名         | 描述                         | 类型                       |
| :------------- | :--------------------------- | :------------------------- |
| visible-change | 当 tooltip 展示/隐藏时被触发 | `(value: boolean) => void` |

### 插槽

| 插槽名  | 说明                      |
| :------ | :------------------------ |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

### 实例

| 名称 | 说明           | 类型         |
| :--- | :------------- | :----------- |
| show | 按钮 show 方法 | `() => void` |
| hide | 按钮 hide 方法 | `() => void` |
