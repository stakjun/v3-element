import type { InjectionKey } from 'vue';

export interface FormProps {
  model: Record<string, any>;
  rules: Record<string, any>;
}

export interface FormItemProps {
  label: string;
  prop?: string;
}

interface FormContext extends FormProps {}

export const formContextKey = Symbol(
  'formContextKey'
) as InjectionKey<FormContext>;
