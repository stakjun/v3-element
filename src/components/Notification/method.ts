import { h, render, shallowReactive } from 'vue';
import type { CreateNotificationProps, NotificationContext } from './types';
import Notification from './Notification.vue';
import useZIndex from '@/hooks/useZIndex';

let seed = 1;
const instances: NotificationContext[] = shallowReactive([]);

export const createNotification = (props: CreateNotificationProps) => {
  const { nextZIndex } = useZIndex();
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

  // 手动删除 把 Notification 组件暴露的 visible 置为 false
  const manualDestroy = () => {
    const instance = instances.find((item) => item.id === id);
    if (instance) {
      instance.vm.exposed!.visible.value = false;
    }
  };

  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy
  };
  const vnode = h(Notification, newProps);

  // 这里用 createApp 也能达到效果，但是 createApp 返回的是一个应用的实例，太重了
  /**
   * 此时会触发 Notification 组件的 setup，当调用 setup 中的 getLastBottomOffset 函数时，instances 还未执行 push 操作，
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
    close: manualDestroy,
    props: newProps
  };
  instances.push(instance);

  return instance;
};

/** 获取上一个实例的 bottom */
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) {
    return 0;
  }
  return instances[idx - 1].vm.exposed!.bottomOffset.value;
};
