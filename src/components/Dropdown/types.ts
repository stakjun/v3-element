import type { VNode } from 'vue';
import type { TooltipProps } from '../Tooltip';

export interface MenuOption {
  /** 菜单展示标签 */
  label: string | VNode;
  /** 菜单选项 Key */
  key: string | number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示分隔符 */
  divided?: boolean;
}

export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[];
  /** 是否在点击菜单项后隐藏菜单 */
  hideAfterClick?: boolean;
}

export interface DropdownEmits {
  /** 下拉框出现/隐藏时触发 */
  (e: 'visible-change', value: boolean): void;
  /** 点击菜单项触发的事件回调 */
  (e: 'select', value: MenuOption): void;
}

export interface DropdownInstance {
  /** 打开下拉菜单 */
  show: () => void;
  /** 关闭下拉菜单 */
  hide: () => void;
}
