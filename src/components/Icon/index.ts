import type { App } from 'vue';
import VkIcon from './Icon.vue';

VkIcon.install = (app: App) => {
	app.component(VkIcon.name!, VkIcon);
};

export default VkIcon;

export * from './types';
