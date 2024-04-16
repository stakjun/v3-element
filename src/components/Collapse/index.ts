import type { App } from 'vue';
import VkCollapse from './Collapse.vue';
import VkCollapseItem from './CollapseItem.vue';

VkCollapse.install = (app: App) => {
  app.component(VkCollapse.name!, VkCollapse);
};

VkCollapseItem.install = (app: App) => {
  app.component(VkCollapseItem.name!, VkCollapseItem);
};

export { VkCollapse, VkCollapseItem };

export * from './types';
