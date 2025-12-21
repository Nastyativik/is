import type { Meta, StoryObj } from '@storybook/vue3';
import UiField from './UiField.vue';
import UiInput from '../UiInput/UiInput.vue';

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UiField>;

export const WithLabel: Story = {
  args: {
    label: 'E-mail',
  },
  render: () => ({
    components: { UiField, UiInput },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="email@example.com" />
      </UiField>
    `,
  }),
};