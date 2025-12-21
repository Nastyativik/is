<template>
  <div class="ui-field">
    <label v-if="label" class="ui-field__label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IProps } from 'src/helpers';

defineProps<IProps>();
</script>

<style scoped>
@import '../../styles/colors.scss';

.ui-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.ui-field__label {
  font-weight: 600;
  color: var(--ui-text);
}
</style>