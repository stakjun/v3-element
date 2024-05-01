<template>
  <div
    class="vk-form-item"
    :class="{
      'is-loading': validateStatus.loading,
      'is-success': validateStatus.state === 'success',
      'is-error': validateStatus.state === 'error',
      'is-required': isRequired
    }"
  >
    <label class="vk-form-item__label">
      <slot name="label" :label="label">{{ label }}</slot>
    </label>
    <div class="vk-form-item__content">
      <slot :validate="validate" />
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
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  provide,
  reactive
} from 'vue';
import {
  formContextKey,
  formItemContextKey,
  type FormItemInstance,
  type FormItemProps,
  type FormValidateError,
  type ValidateStatusProp
} from './types';
import { isNil } from 'lodash-es';
import Schema from 'async-validator';

defineOptions({
  name: 'VkFormItem'
});

const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);

const validateStatus: ValidateStatusProp = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
});
let initialValue: any = null;
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

/** 是否必须 */
const isRequired = computed(() =>
  itemRules.value.some((rule) => rule.required)
);

const getTriggeredRules = (trigger?: string) => {
  if (itemRules.value) {
    return itemRules.value.filter((rule) => {
      if (!trigger || !rule.trigger) {
        return true;
      }
      return rule.trigger && rule.trigger === trigger;
    });
  } else {
    return [];
  }
};
/** 规则验证 */
const validate = async (trigger?: string) => {
  const modelName = props.prop;
  const triggeredRules = getTriggeredRules(trigger);
  if (triggeredRules.length === 0) {
    return true;
  }
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggeredRules
    });
    validateStatus.loading = true;
    return validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = 'success';
      })
      .catch((e: FormValidateError) => {
        const { errors } = e;
        validateStatus.state = 'error';
        validateStatus.errorMsg =
          errors && errors.length ? errors[0].message || '' : '';
        return Promise.reject(e);
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};

const clearValidate = () => {
  validateStatus.state = 'init';
  validateStatus.loading = false;
  validateStatus.errorMsg = '';
};

/** 重置 */
const resetField = () => {
  clearValidate();
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue;
  }
};

const context = {
  validate,
  prop: props.prop || '',
  resetField,
  clearValidate
};
provide(formItemContextKey, context);

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context);
    initialValue = innerValue.value;
  }
});

onUnmounted(() => {
  formContext?.removeField(context);
});

defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  clearValidate,
  resetField
});
</script>
