import type { VNode } from 'vue';

export interface MessageProps {
  /** 消息文字 */
  message?: string | VNode;
  /** 显示时间，单位为毫秒。 设为 0 则不会自动关闭 */
  duration?: number;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 消息类型 */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** 组件隐藏时销毁节点 */
  onDestroy: () => void;
}

export type CreateMessageProps = Omit<MessageProps, 'onDestroy'>;
