<template>
  <form class="vk-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import {
  formContextKey,
  type FormContext,
  type FormInstance,
  type FormItemContext,
  type FormProps,
  type FormValidateError
} from './types';
import type { ValidateFieldsError } from 'async-validator';

defineOptions({
  name: 'VkForm'
});

const props = defineProps<FormProps>();

const fields: FormItemContext[] = [];
const addField: FormContext['addField'] = (field) => {
  fields.push(field);
};
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};

/** 表单整体验证 */
const validate = async () => {
  let validateErrors: ValidateFieldsError = {};
  for (const field of fields) {
    try {
      await field.validate('');
    } catch (e) {
      const error = e as FormValidateError;
      validateErrors = {
        ...validateErrors,
        ...error.fields
      };
    }
  }
  if (!Object.keys(validateErrors).length) {
    return true;
  }
  return Promise.reject(validateErrors);
};

provide(formContextKey, {
  ...props,
  addField,
  removeField
});

defineExpose<FormInstance>({
  validate
});
</script>
