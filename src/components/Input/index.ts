import type { App } from 'vue';
import VkInput from './Input.vue';

VkInput.install = (app: App) => {
  app.component(VkInput.name!, VkInput);
};

export default VkInput;

export * from './types';
