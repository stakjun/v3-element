import { h, render, shallowReactive } from 'vue';
import type { CreateMessageProps, MessageContext } from './types';
import Message from './Message.vue';

let seed = 1;
const instances: MessageContext[] = shallowReactive([]);

export const createMessage = (props: CreateMessageProps) => {
  const id = `message_${seed++}`;
  const container = document.createElement('div');
  /** 实例销毁 */
  const destroy = () => {
    // 从实例中删除
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx === -1) {
      return;
    }
    instances.splice(idx, 1);
    render(null, container);
  };
  const newProps = {
    ...props,
    id,
    onDestroy: destroy
  };
  const vnode = h(Message, newProps);

  // 这里用 createApp 也能达到效果，但是 createApp 返回的是一个应用的实例，太重了
  /**
   * 此时会触发 Message 组件的 setup，当调用 setup 中的 getLastBottomOffset 函数时，instances 还未执行 push 操作，
   * 如果 instances 是一个普通数组，getLastBottomOffset 不会找到对应的 idx，因此 instances 必须是一个响应式的数据，
   * 那么当 push 之后， getLastBottomOffset 会重新执行
   */
  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);

  /** 如果把这段代码移到 render 前面，也是不可行的，因为 vm 是异步的，如果组件未渲染，它的值会是 null */
  const vm = vnode.component!;
  const instance = {
    id,
    vnode,
    vm,
    props: newProps
  };
  instances.push(instance);

  return instance;
};

/** 获取上一个实例 */
export const getLastInstance = () => {
  return instances[instances.length - 1];
};

/** 获取上一个实例的 bottom */
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) {
    return 0;
  }
  return instances[idx - 1].vm.exposed!.bottomOffset.value;
};
