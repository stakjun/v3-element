import type { App } from 'vue';
import VkSelect from './Select.vue';

VkSelect.install = (app: App) => {
  app.component(VkSelect.name!, VkSelect);
};

export default VkSelect;

export * from './types';
