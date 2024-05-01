<template>
  <div
    class="vk-form-item"
    :class="{
      'is-loading': validateStatus.loading,
      'is-success': validateStatus.state === 'success',
      'is-error': validateStatus.state === 'error'
    }"
  >
    <label class="vk-form-item__label">
      <slot name="label" :label="label">{{ label }}</slot>
    </label>
    <div class="vk-form-item__content">
      <slot />
      <div
        class="vk-form-item__error-msg"
        v-if="validateStatus.state === 'error'"
      >
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, provide, reactive } from 'vue';
import {
  formContextKey,
  formItemContextKey,
  type FormItemProps,
  type validateError
} from './types';
import { isNil } from 'lodash-es';
import Schema from 'async-validator';

defineOptions({
  name: 'VkFormItem'
});

const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);

const validateStatus = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
});

/** FormItem 的值 */
const innerValue = computed(() => {
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop];
  } else {
    return null;
  }
});
/** FormItem 的规则 */
const itemRules = computed(() => {
  const rules = formContext?.rules;
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop];
  } else {
    return [];
  }
});
/** 规则验证 */
const validate = () => {
  const modelName = props.prop;
  if (modelName) {
    const validator = new Schema({
      [modelName]: itemRules.value
    });
    validateStatus.loading = true;
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = 'success';
      })
      .catch((e: validateError) => {
        const { errors } = e;
        validateStatus.state = 'error';
        validateStatus.errorMsg =
          errors && errors.length ? errors[0].message || '' : '';
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};

provide(formItemContextKey, { validate });
</script>
