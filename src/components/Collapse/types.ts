import type { Ref, InjectionKey } from 'vue';

export type NameType = string | number;

export interface CollapseProps {
  modelValue: NameType[];
  /** 是否手风琴模式 */
  accordion?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void;
  /** 切换活动面板 */
  (e: 'change', values: NameType[]): void;
}

export interface CollapseItemProps {
  /** 唯一标志符 */
  name: NameType;
  /** 面板标题 */
  title?: string;
  /** 是否禁用 */
  disabled?: boolean;
}

interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export const collapseContextKey = Symbol(
  'collapseContextKey'
) as InjectionKey<CollapseContext>;
