import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import type { App } from 'vue';
import VkButton from '@/components/Button';
import VkIcon from '@/components/Icon';
import VkAlert from '@/components/Alert';
import { VkCollapse, VkCollapseItem } from '@/components/Collapse';
import VkTooltip from '@/components/Tooltip';
import VkDropdown from '@/components/Dropdown';
import VkMessage from '@/components/Message';
import VkNotification from './components/Notification';
import VkInput from './components/Input';
import VkSwitch from './components/Switch';
import VkSelect from './components/Select';
import { VkForm, VkFormItem } from './components/Form';
import { createMessage } from '@/components/Message';
import { createNotification } from '@/components/Notification';

import './styles/index.css';

library.add(fas);

const components = [
  VkButton,
  VkIcon,
  VkAlert,
  VkCollapse,
  VkCollapseItem,
  VkTooltip,
  VkDropdown,
  VkMessage,
  VkNotification,
  VkInput,
  VkSwitch,
  VkSelect,
  VkForm,
  VkFormItem
];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

/** 这里将组件导出，是为了在单独使用组件时，可以按需引入 */
export {
  VkButton,
  VkIcon,
  VkAlert,
  VkCollapse,
  VkCollapseItem,
  VkTooltip,
  VkDropdown,
  VkMessage,
  VkNotification,
  VkInput,
  VkSwitch,
  VkSelect,
  VkForm,
  VkFormItem,
  createMessage,
  createNotification
};

export default {
  install
};

/**
 * 这里是重点，需要将这些组件在ts中声明为全局组件；
 */
declare module 'vue' {
  export interface GlobalComponents {
    VkButton: typeof VkButton;
    VkIcon: typeof VkIcon;
    VkAlert: typeof VkAlert;
    VkCollapse: typeof VkCollapse;
    VkCollapseItem: typeof VkCollapseItem;
    VkTooltip: typeof VkTooltip;
    VkDropdown: typeof VkDropdown;
    VkMessage: typeof VkMessage;
    VkNotification: typeof VkNotification;
    VkInput: typeof VkInput;
    VkSwitch: typeof VkSwitch;
    VkSelect: typeof VkSelect;
    VkForm: typeof VkForm;
    VkFormItem: typeof VkFormItem;
  }
}
