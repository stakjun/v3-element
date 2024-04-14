type AlertType = 'success' | 'warning' | 'danger' | 'info';
type AlertEffect = 'light' | 'dark';

export interface AlertProps {
	/** 类型 */
	type: AlertType;
	/** 主题样式 */
	effect?: AlertEffect;
	/** 是否可以关闭 */
	closable?: boolean;
}

export interface AlertEmits {
	(e: 'close'): void;
}
