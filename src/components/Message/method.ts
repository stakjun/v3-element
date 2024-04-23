import { h, render } from 'vue';
import type { MessageProps } from './types';
import Message from './Message.vue';

export const createMessage = (props: MessageProps) => {
  const container = document.createElement('div');
  const vnode = h(Message, props);

  // 这里用 createApp 也能达到效果，但是 createApp 返回的是一个应用的实例，太重了
  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);
};
