<template>
  <button
    :class="['ui-button', `ui-button--${variant}`]"
    :disabled="isDisabled"
    :type="type"
    :data-variant="variant"
    @click="$emit('click')"
  >
    <slot> </slot>
  </button>
</template>

<script setup lang="ts">
import type { IProps, IEmit } from 'src/helpers';

defineProps<IProps>();
defineEmits<IEmit>();

const layout = defineModel<string>('variant', { default: 'primary' });
const isDisabled = defineModel<boolean>('isDisabled', { default: false });
const type = defineModel<'button' | 'submit'>('type', { default: 'button' });
</script>

<style scoped>
@import '../../styles/colors.scss';

.ui-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.ui-button--primary {
  background: var(--ui-color-primary);
  color: white;
}

.ui-button--secondary {
  background: var(--ui-color-secondary);
  color: white;
}

.ui-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ui-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--ui-focus-ring);
}
</style>
