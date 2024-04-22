---
title: Dropdown 下拉菜单
description: Dropdown 组件文档
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 触发方式

将 `trigger` 属性设置为 `clic`k`即可， 默认为`hover`。

<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="Dropdown 组件的触发方式"></preview>

## 手动打开关闭

将 `manual` 属性设置为 `true` 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

<preview path="../demo/Dropdown/Manual.vue" title="手动打开关闭" description="Dropdown 组件的手动打开关闭"></preview>

## API

### 属性

| 属性名         | 说明                                             | 类型                                                                                                                                                                         | 默认值 |
| :------------- | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| menuOptions    | 菜单选项                                         | `MenuOption[]`                                                                                                                                                               | -      |
| placement      | Tooltip 组件出现的位置                           | `enum` - `'top'\| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom |
| transition     | 动画名称                                         | `string`                                                                                                                                                                     | fade   |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` 请参考 [popper.js](https://popper.js.org/docs/v2/) 文档                                                                                                             | {}     |
| trigger        | 如何触发 Tooltip                                 | `enum` - `'hover'\| 'click'`                                                                                                                                                 | hover  |
| open-delay     | 在触发后多久显示内容，单位毫秒                   | `number`                                                                                                                                                                     | 50     |
| close-delay    | 延迟关闭，单位毫秒                               | `number`                                                                                                                                                                     | 50     |
| manual         | 是否开启手动触发模式                             | `boolean`                                                                                                                                                                    | false  |
| hideAfterClick | 是否在点击菜单项后隐藏菜单                       | `boolean`                                                                                                                                                                    | true   |

### MenuOption

| 属性名   | 说明           | 类型               | 默认值 |
| :------- | :------------- | :----------------- | ------ |
| label    | 菜单展示标签   | `string \| VNode`  | -      |
| key      | 菜单选项 Key   | `string \| number` | -      |
| disabled | 是否禁用       | `boolean`          | false  |
| divided  | 是否显示分隔符 | `boolean`          | false  |

### 事件

| 事件名         | 描述                     | 类型                          |
| :------------- | :----------------------- | :---------------------------- |
| visible-change | 下拉框出现/隐藏时触发    | `(value: boolean) => void`    |
| select         | 点击菜单项触发的事件回调 | `(value: MenuOption) => void` |

### 插槽

| 插槽名  | 说明                       |
| :------ | :------------------------- |
| default | Dropdown 触发 & 引用的元素 |
| content | 自定义内容                 |

### 实例

| 名称 | 说明         | 类型         |
| :--- | :----------- | :----------- |
| show | 打开下拉菜单 | `() => void` |
| hide | 关闭下拉菜单 | `() => void` |
