import { ComponentMeta } from '@storybook/react';
import { Input } from '~/components/Input';

export default {
  title: 'components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input atoms',
      },
    },
  },
} as ComponentMeta<typeof Input>;

export const Default = {
  parameters: {
    docs: {
      storyDescription: 'Input atoms',
    },
  },
  args: {
    type: 'text',
    name: 'username',
    placeholder: 'your name',
  },
};
