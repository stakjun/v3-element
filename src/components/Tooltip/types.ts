import type { Placement } from '@popperjs/core';

export interface TooltipProps {
  /** 显示的内容  */
  content?: string;
  /** 触发方式 */
  trigger?: 'hover' | 'click';
  /** 内容出现的位置 */
  placement?: Placement;
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void;
}
