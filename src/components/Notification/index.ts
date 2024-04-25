import type { App } from 'vue';
import VkNotification from './Notification.vue';
import { createNotification } from './method';

VkNotification.install = (app: App) => {
  app.component(VkNotification.name!, VkNotification);
};

export default VkNotification;
export { createNotification };

export * from './types';
