import type { App } from 'vue';
import VkAlert from './Alert.vue';

VkAlert.install = (app: App) => {
	app.component(VkAlert.name!, VkAlert);
};

export default VkAlert;

export * from './types';
