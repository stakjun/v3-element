import type { App } from 'vue';
import VkButton from './Button.vue';

VkButton.install = (app: App) => {
	app.component(VkButton.name, VkButton);
};

export default VkButton;

export * from './types';
