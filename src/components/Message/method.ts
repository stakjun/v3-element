import { h, render } from 'vue';
import type { CreateMessageProps } from './types';
import Message from './Message.vue';

export const createMessage = (props: CreateMessageProps) => {
  const container = document.createElement('div');
  const destroy = () => {
    render(null, container);
  };
  const newProps = {
    ...props,
    onDestroy: destroy
  };
  const vnode = h(Message, newProps);

  // 这里用 createApp 也能达到效果，但是 createApp 返回的是一个应用的实例，太重了
  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);
};
