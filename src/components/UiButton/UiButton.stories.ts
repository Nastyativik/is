import type { Meta, StoryObj } from '@storybook/vue3';
import UIButton from './UIButton.vue';

const meta: Meta<typeof UIButton> = {
  title: 'Components/UIButton',
  component: UIButton,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof UIButton> = {
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
  render: (args) => ({
    components: { UIButton },
    template: `<UIButton v-bind="args">Кнопка</UIButton>`, 
  }),
};

