import type { App } from 'vue';
import VkTooltip from './Tooltip.vue';

VkTooltip.install = (app: App) => {
  app.component(VkTooltip.name!, VkTooltip);
};

export default VkTooltip;

export * from './types';
