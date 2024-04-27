export interface SwitchProps {
  /** 绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型 */
  modelValue: boolean;
  /** switch 的大小 */
  size?: 'small' | 'large';
  /** 是否禁用 */
  disabled?: boolean;
  /** switch 打开时的文字描述 */
  activeText?: string;
  /** switch 的状态为 off 时的文字描述 */
  inactiveText?: string;
  /** switch 对应的 name 属性 */
  name?: string;
  /** input 的 id */
  id?: string;
}

export interface SwitchEmits {
  (e: 'change', value: boolean): void;
  (e: 'update:modelValue', value: boolean): void;
}
