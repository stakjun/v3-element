import type { ComponentInternalInstance, VNode } from 'vue';

export interface NotificationProps {
  /** 标题 */
  title: string;
  /** 通知栏正文内容 */
  message: string | VNode;
  /** 通知的类型 */
  type?: 'success' | 'info' | 'warning' | 'danger';
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 显示时间, 单位为毫秒。 值为 0 则不会自动关闭 */
  duration?: number;
  /** 左侧自定义图标名称 */
  icon?: string;
  /** Notification 距离窗口顶部的偏移量以及 Notification 之间的间隔 */
  offset?: number;
  id: string;
  zIndex: number;
  /** 组件隐藏时销毁节点 */
  onDestroy: () => void;
}

export type CreateNotificationProps = Omit<
  NotificationProps,
  'id' | 'zIndex' | 'onDestroy'
>;

export interface NotificationContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: NotificationProps;
  close: () => void;
}
