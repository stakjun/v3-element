import type { App } from 'vue';
import VkSwitch from './Switch.vue';

VkSwitch.install = (app: App) => {
  app.component(VkSwitch.name!, VkSwitch);
};

export default VkSwitch;

export * from './types';
