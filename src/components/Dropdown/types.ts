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
  /** 点击以后是否自动隐藏菜单 */
  hideAfterClick?: boolean;
}

export interface DropdownEmits {
  /** 当 Dropdown 展示/隐藏时被触发 */
  (e: 'visible-change', value: boolean): void;
  /** 当选择到某一个选项的时候被触发 */
  (e: 'select', value: MenuOption): void;
}

export interface DropdownInstance {
  /** 展示 */
  show: () => void;
  /** 隐藏 */
  hide: () => void;
}
