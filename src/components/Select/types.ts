export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** 选中项绑定值 */
  modelValue: string;
  /** 选项 */
  options: SelectOption[];
  /** 占位符 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可以清空选项 */
  clearable?: boolean;
}

export interface SelectStates {
  inputValue: string;
  selectedOption: SelectOption | null;
  mouseHover: boolean;
}

export interface SelectEmits {
  (e: 'change', value: string): void;
  (e: 'update:modelValue', value: string): void;
  (e: 'visible-change', value: boolean): void;
  (e: 'clear'): void;
}
