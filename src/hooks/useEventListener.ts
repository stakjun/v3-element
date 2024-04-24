import { isRef, onBeforeUnmount, onMounted, unref, watch, type Ref } from 'vue';

const useEventListener = (
  target: EventTarget | Ref<EventTarget | null>,
  event: string,
  handler: (e: Event) => any
) => {
  if (isRef(target)) {
    // 如果是 Ref 类型，可能会从 null 变成 EventTarget，也可能会从一个 EventTarget 变成另外一个 EventTarget
    // 所以得先解绑老的
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
};

export default useEventListener;
