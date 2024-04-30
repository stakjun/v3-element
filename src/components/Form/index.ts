import type { App } from 'vue';
import VkForm from './Form.vue';
import VkFormItem from './FormItem.vue';

VkForm.install = (app: App) => {
  app.component(VkForm.name!, VkForm);
};

VkFormItem.install = (app: App) => {
  app.component(VkFormItem.name!, VkFormItem);
};

export { VkForm, VkFormItem };

export * from './types';
