import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/Utils/InputField',
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    id: 'username',
    label: 'Usuário',
    placeholder: 'Digite seu nome de usuário',
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '***********'
  },
};

export const WithError: Story = {
  args: {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'exemplo@email.com',
    error: 'Formato inválido',
  },
};