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
  type FormItemContext,
  type FormProps
} from './types';

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

provide(formContextKey, {
  ...props,
  addField,
  removeField
});
</script>
