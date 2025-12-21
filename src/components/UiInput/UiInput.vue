<template>
  <input
    v-model="modelValue"
    :class="['ui-input', { 'ui-input--disabled': isDisabled }]"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :data-variant="variant"
    @input="$emit('update:modelValue', modelValue)"
  />
</template>

<script setup lang="ts">
import type { IProps, IEmit } from 'src/helpers';

defineProps<IProps>();
defineEmits<IEmit>();

const modelValue = defineModel<string>();
const variant = defineModel<string>('variant', { default: 'primary' });
const isDisabled = defineModel<boolean>('isDisabled', { default: false });
</script>

<style scoped>
@import '../../styles/colors.scss';

.ui-input {
  padding: 8px 12px;
  border: 1px solid var(--ui-border);
  border-radius: 6px;
  font-size: 16px;
  background: var(--ui-input-bg);
  color: var(--ui-text);
  transition: border 0.2s;
}

.ui-input:focus {
  outline: none;
  border-color: var(--ui-color-primary);
  box-shadow: 0 0 0 3px var(--ui-focus-ring);
}

.ui-input--disabled {
  background: var(--ui-disabled-bg);
  cursor: not-allowed;
}
</style>