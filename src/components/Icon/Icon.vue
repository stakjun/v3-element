<template>
  <i 
    class="vk-icon"
    :class="{
      [`vk-icon--${type}`]: type
    }"
    :style="customStyle"
  >
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import type { IconProps } from './types'

defineOptions({
  name: 'VkIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()
/** 过滤自定义属性之后的值  */
const filteredProps = computed(() => omit(props, ['type', 'color']))
/** 内联 style */
const customStyle = computed(() => (
  props.color ? { color: props.color } : {}
))
</script>
