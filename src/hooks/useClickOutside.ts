import { onMounted, onUnmounted, type Ref } from 'vue';

const useClickOutside = (
  elementRef: Ref<HTMLElement | null>,
  callback: (e: MouseEvent) => void
) => {
  const handler = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e);
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handler);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });
};

export default useClickOutside;
