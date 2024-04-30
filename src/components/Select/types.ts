import type { VNode } from 'vue';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type RenderLabelFunc = (option: SelectOption) => VNode;
export type FilterMethod = (value: string) => SelectOption[];
export type FilterRemoteMethod = (value: string) => Promise<SelectOption[]>;

export interface SelectProps {
  /** 选中项绑定值 */
  modelValue: string;
  /** 选项 */
  options?: SelectOption[];
  /** 占位符 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可以清空选项 */
  clearable?: boolean;
  renderLabel?: RenderLabelFunc;
  /** Select 组件是否可筛选 */
  filterable?: boolean;
  /** 自定义筛选方法 */
  filterMethod?: FilterMethod;
  /** 其中的选项是否从服务器远程加载 */
  remote?: boolean;
  /** 自定义远程搜索方法 */
  remoteMethod?: FilterRemoteMethod;
}

export interface SelectStates {
  inputValue: string;
  selectedOption: SelectOption | null;
  mouseHover: boolean;
  loading: boolean;
  highlightIndex: number;
}

export interface SelectEmits {
  (e: 'change', value: string): void;
  (e: 'update:modelValue', value: string): void;
  (e: 'visible-change', value: boolean): void;
  (e: 'clear'): void;
}
