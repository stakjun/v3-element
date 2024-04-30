<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="state.mouseHover = true"
    @mouseleave="state.mouseHover = false"
  >
    <Tooltip
      placement="bottom-start"
      manual
      ref="tooltipRef"
      :popperOptions="popperOptions"
      @click-outside="controlDropdown(false)"
    >
      <Input
        v-model="state.inputValue"
        ref="inputRef"
        :placeholder="filteredPlaceholder"
        :disabled="disabled"
        :readonly="!filterable || !isDropdownShow"
        @input="debounceFilter"
        @keydown="handleKeydown"
      >
        <template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClearIcon"
            class="vk-input__clear"
            @click.stop="clear"
            @mousedown.prevent="NOOP"
          />
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          />
        </template>
      </Input>
      <template #content>
        <div class="vk-select__loading" v-if="state.loading">
          <Icon icon="spinner" spin />
        </div>
        <div
          class="vk-select__nodata"
          v-else-if="filterable && !filterOptions.length"
        >
          no matching data
        </div>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in filterOptions" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-selected': state.selectedOption?.value === item.value,
                'is-disabled': item.disabled,
                'is-highlighted': state.highlightIndex === index
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemClick(item)"
            >
              <RenderVnode
                :vNode="renderLabel ? renderLabel(item) : item.label"
              />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import Input, { type InputInstance } from '../Input';
import Tooltip, { type TooltipInstance } from '../Tooltip';
import type {
  SelectEmits,
  SelectOption,
  SelectProps,
  SelectStates
} from './types';
import Icon from '../Icon';
import RenderVnode from '../Common/RenderVnode';
import { debounce, isFunction } from 'lodash-es';

/** popper 设置 */
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles']
    }
  ]
};

defineOptions({
  name: 'VkSelect'
});

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
});
const emits = defineEmits<SelectEmits>();

const tooltipRef = ref<TooltipInstance | null>(null);
const inputRef = ref<InputInstance | null>(null);

const timeout = computed(() => (props.remote ? 300 : 0));

/** 菜单是否打开 */
const isDropdownShow = ref(false);

/** 根据 modelValue 找到初始的 option */
const initialOption = computed(() => {
  const option = props.options.find(
    (option) => option.value === props.modelValue
  );
  return option || null;
});
/** input 的值和 选中的 option */
const state: SelectStates = reactive({
  inputValue: initialOption.value?.label || '',
  selectedOption: initialOption.value,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
});

/** 展示清楚按钮 */
const showClearIcon = computed(
  () =>
    props.clearable &&
    state.mouseHover &&
    state.selectedOption &&
    state.inputValue.trim()
);

/** placeholder */
/** filter 模式下的 placeholder 为选中的 label */
const filteredPlaceholder = computed(() =>
  props.filterable && state.selectedOption && isDropdownShow.value
    ? state.selectedOption.label
    : props.placeholder
);

/** 菜单项 */
const filterOptions = ref(props.options);
/** 根据输入框的值筛选 */
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) {
    return;
  }
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filterOptions.value = props.filterMethod(searchValue);
  } else if (
    props.remote &&
    props.remoteMethod &&
    isFunction(props.remoteMethod)
  ) {
    state.loading = true;
    try {
      filterOptions.value = await props.remoteMethod(searchValue);
    } catch (error) {
      console.error(error);
      filterOptions.value = [];
    } finally {
      state.loading = false;
    }
  } else {
    filterOptions.value = props.options.filter((option) =>
      option.label.includes(searchValue)
    );
    state.highlightIndex = -1;
  }
};
const onFilter = () => {
  generateFilterOptions(state.inputValue);
};
const debounceFilter = debounce(() => {
  onFilter();
}, timeout.value);

const controlDropdown = (show: boolean) => {
  if (show) {
    // filer 模式下之前选择过对应的值每次点击都会重置
    if (props.filterable && state.selectedOption) {
      state.inputValue = '';
    }
    if (props.filterable) {
      generateFilterOptions(state.inputValue);
    }
    tooltipRef.value?.show();
  } else {
    // blur 的时候将值回填
    if (props.filterable) {
      state.inputValue = state.selectedOption ? state.selectedOption.label : '';
    }
    state.highlightIndex = -1;
    tooltipRef.value?.hide();
  }
  isDropdownShow.value = show;
  emits('visible-change', show);
};
/** 点击展示/隐藏 */
const toggleDropdown = () => {
  if (props.disabled) {
    return;
  }
  if (isDropdownShow.value) {
    controlDropdown(false);
  } else {
    controlDropdown(true);
  }
};

/** 输入框键盘事件 */
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true);
      } else {
        if (
          state.highlightIndex > -1 &&
          filterOptions.value[state.highlightIndex]
        ) {
          itemClick(filterOptions.value[state.highlightIndex]);
        }
      }
      break;
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false);
      }
      break;
    case 'ArrowUp':
      e.preventDefault();
      if (filterOptions.value.length && isDropdownShow.value) {
        if (state.highlightIndex === -1 || state.highlightIndex === 0) {
          state.highlightIndex = filterOptions.value.length - 1;
        } else {
          state.highlightIndex--;
        }
      }
      break;
    case 'ArrowDown':
      e.preventDefault();
      if (filterOptions.value.length && isDropdownShow.value) {
        if (
          state.highlightIndex === -1 ||
          state.highlightIndex === filterOptions.value.length - 1
        ) {
          state.highlightIndex = 0;
        } else {
          state.highlightIndex++;
        }
      }
      break;
    default:
      break;
  }
};

/** 点击菜单项 */
const itemClick = (item: SelectOption) => {
  if (item.disabled) {
    return;
  }
  state.inputValue = item.label;
  state.selectedOption = item;
  emits('change', item.value);
  emits('update:modelValue', item.value);
  controlDropdown(false);
  inputRef.value?.ref?.focus();
};

/** 清空 */
const clear = () => {
  state.inputValue = '';
  state.selectedOption = null;
  emits('change', '');
  emits('update:modelValue', '');
  emits('clear');
};

const NOOP = () => {};

watch(
  () => props.options,
  (newVal) => {
    filterOptions.value = newVal;
  }
);
</script>
