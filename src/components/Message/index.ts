import type { App } from 'vue';
import VkMessage from './Message.vue';
import { createMessage } from './method';

VkMessage.install = (app: App) => {
  app.component(VkMessage.name!, VkMessage);
};

export default VkMessage;
export { createMessage };

export * from './types';
