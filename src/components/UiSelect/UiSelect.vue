<template>
  <select
    v-model="modelValue"
    :class="['ui-select', { 'ui-select--disabled': isDisabled }]"
    :disabled="isDisabled"
    :data-variant="variant"
    @change="$emit('update:modelValue', modelValue)"
  >
    <option v-for="(opt, i) in options" :key="i" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { IProps, IEmit } from 'src/helpers';

defineProps<IProps>();
defineEmits<IEmit>();

const modelValue = defineModel<string>();
const layout = defineModel<string>('layout', { default: 'primary' });
const isDisabled = defineModel<boolean>('isDisabled', { default: false });
</script>

<style scoped>
@import '../../styles/colors.scss';

.ui-select {
  padding: 8px 12px;
  border: 1px solid var(--ui-border);
  border-radius: 6px;
  font-size: 16px;
  background: var(--ui-input-bg);
  color: var(--ui-text);
  transition: border 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236c757d' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  padding-right: 32px;
}

.ui-select:focus {
  outline: none;
  border-color: var(--ui-color-primary);
  box-shadow: 0 0 0 3px var(--ui-focus-ring);
}

.ui-select--disabled {
  background: var(--ui-disabled-bg);
  cursor: not-allowed;
}
</style>
