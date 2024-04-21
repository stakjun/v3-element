import type { Options, Placement } from '@popperjs/core';

export interface TooltipProps {
  /** 显示的内容  */
  content?: string;
  /** 触发方式 */
  trigger?: 'hover' | 'click';
  /** 内容出现的位置 */
  placement?: Placement;
  /** 是否手动触发 */
  manual?: boolean;
  /** popper.js 参数 */
  popperOptions?: Partial<Options>;
  /** 动画名称 */
  transition?: string;
  /** 显示延迟 */
  openDelay?: number;
  /** 隐藏延迟 */
  closeDelay?: number;
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
