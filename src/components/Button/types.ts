type ButtonSize = 'small' | 'large'
type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  /** 尺寸 */
  size?: ButtonSize;
  /** 类型 */
  type?: ButtonType;
  /** 是否为朴素按钮 */
  plain?: boolean;
  /** 是否为圆角按钮 */
  round?: boolean;
  /** 是否为圆形按钮 */
  circle?: boolean;
  /** 是否为加载状态 */
  loading?: boolean;
  /** 是否为禁用状态 */
  disabled?: boolean;
  /** 图标 */
  icon?: string;
  /** 原生 autofocus 属性 */
  autofocus?: boolean;
  /** 原生 type 属性 */
  nativeType?: NativeType;
}