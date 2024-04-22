import type { App } from 'vue';
import VkDropdown from './Dropdown.vue';

VkDropdown.install = (app: App) => {
  app.component(VkDropdown.name!, VkDropdown);
};

export default VkDropdown;

export * from './types';
