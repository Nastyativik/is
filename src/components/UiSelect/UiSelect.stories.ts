import type { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  title: 'Components/UiSelect',
  component: UiSelect,
  tags: ['autodocs'],
};


export default meta;

export const Primary: StoryObj<typeof UiSelect> = {
  args: {
    modelValue: 'Option 1',
    options: ['Option 1', 'Option 2', 'Option 3'],
    isDisabled: false,
  },
  render: (args) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    template: `<UiSelect v-bind="args" />`,
  }),
};