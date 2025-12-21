import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
   template: `
      <UiField v-bind="args">
        <UiInput placeholder="Введите текст" />
      </UiField>
    `,
  }),
};