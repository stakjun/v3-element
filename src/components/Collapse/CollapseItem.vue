<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="vk-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle" />
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="vk-collapse-item__wrapper" v-show="isActive">
        <div class="vk-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { collapseContextKey, type CollapseItemProps } from './types';
import Icon from '@/components/Icon';

defineOptions({
  name: 'VkCollapseItem'
});

const props = defineProps<CollapseItemProps>();
const collapseContext = inject(collapseContextKey);

/** 是否打开 */
const isActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name)
);
/** 点击 header */
const handleClick = () => {
  if (props.disabled) {
    return;
  }
  collapseContext?.handleItemClick(props.name);
};

/** 根据高度添加 slide 效果 */
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px';
    el.style.overflow = 'hidden';
  },
  enter(el) {
    // scrollHeight 一个元素内容的高度
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  leave(el) {
    // scrollHeight 一个元素内容的高度
    el.style.height = `0px`;
  },
  afterLeave(el) {
    el.style.height = '';
    el.style.overflow = '';
  }
};
</script>
