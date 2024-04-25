---
title: Notification 通知
description: Notification 通知 组件文档
---

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

注册了一个 `createNotification` 方法用于调用。 你可以通过设置 `title` 和 `message` 属性来设置通知的标题和正文内容。默认情况下，通知在 `3000` 毫秒后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。 如果你将它设置为 `0`，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 `Number`，单位为毫秒。

<preview path="../demo/Notification/Basic.vue" title="基础用法" description="Notification 组件的基础用法"></preview>

## 不同类型的通知

我们提供了四种不同类型的提醒框：success、warning、info 和 danger。

<preview path="../demo/Notification/Type.vue" title="不同状态" description="Notification 组件的不同状态"></preview>

## 隐藏关闭按钮

通知的关闭按钮可以被设置为隐藏。

将 `showClose` 属性设置为 `false` 即可隐藏关闭按钮。

<preview path="../demo/Notification/Close.vue" title="隐藏关闭按钮" description="Notification 组件的隐藏关闭按钮"></preview>

## 自定义图标类型

可以使用 `icon` 属性来自定义通知左侧图标。图标名称请看 `fontawesome` 官网 https://fontawesome.com/search?o=r&m=free&s=solid

<preview path="../demo/Notification/Icon.vue" title="自定义图标类型" description="Notification 组件的自定义图标类型"></preview>

## 单独引用

```ts
import { createNotification } from 'v3-element';
```

## API

### Notification 配置项

使用 `createNotification ` 创建通知，它接受一个 `Object`，以下是 `Object` 中的属性列表。

| 名称      | 说明                                         | 类型                                   | 默认值 |
| :-------- | :------------------------------------------- | :------------------------------------- | :----- |
| title     | 标题                                         | `string`                               | -      |
| message   | 通知栏正文内容                               | `string \| VNode`                      | -      |
| type      | 通知的类型                                   | `success \| info \| warning \| danger` | info   |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | `number`                               | 3000   |
| showClose | 是否显示关闭按钮                             | `boolean`                              | true   |
| offset    | 距离上一个 Notification 之间的间隔           | `number`                               | 20     |
| icon      | 左侧自定义图标名称                           | `string`                               | -      |

### Notification 方法

调用 `createNotification` 会返回当前 `Notification` 的实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。
| 名称 | 描述 | 类型 |
| :------------- | :------------------------------------------- | :------------------------------------- |
| close | 关闭当前的 Notification | `() => void` |
