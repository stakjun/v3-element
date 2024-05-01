import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError
} from 'async-validator';
import type { InjectionKey } from 'vue';

export interface FormItemRule extends RuleItem {
  trigger?: string;
}

export type FormRules = Record<string, FormItemRule[]>;
export interface FormProps {
  model: Record<string, any>;
  rules?: FormRules;
}

export interface FormItemProps {
  label?: string;
  prop?: string;
}

export interface ValidateStatusProp {
  state: 'init' | 'success' | 'error';
  errorMsg: string;
  loading: boolean;
}

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
}
export interface FormItemContext {
  prop: string;
  validate: (trigger?: string) => Promise<any>;
  clearValidate(): void;
  resetField(): void;
}

export const formContextKey = Symbol(
  'formContextKey'
) as InjectionKey<FormContext>;

export const formItemContextKey = Symbol(
  'formItemContextKey'
) as InjectionKey<FormItemContext>;

export interface FormValidateError {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

export interface FormInstance {
  validate: () => Promise<any>;
  resetFields: (props?: string[]) => void;
  clearValidate: (props?: string[]) => void;
}

export interface FormItemInstance {
  validateStatus: ValidateStatusProp;
  validate: (trigger?: string) => Promise<any>;
  clearValidate(): void;
  resetField(): void;
}
