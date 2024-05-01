<template>
  <div class="vk-form-item">
    <label class="vk-form-item__label">
      <slot name="label" :label="label">{{ label }}</slot>
    </label>
    <div class="vk-form-item__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { formContextKey, type FormItemProps } from './types';
import { isNil } from 'lodash-es';

defineOptions({
  name: 'VkFormItem'
});

const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);

const innerValue = computed(() => {
  const model = formContext?.model;
  if (model && props.prop && isNil(model[props.prop])) {
    return model[props.prop];
  } else {
    return null;
  }
});

const innerRules = computed(() => {
  const rules = formContext?.model;
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop];
  } else {
    return [];
  }
});
</script>
