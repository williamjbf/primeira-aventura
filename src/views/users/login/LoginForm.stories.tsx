import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm.tsx';

const meta: Meta<typeof LoginForm> = {
  title: 'Views/Auth/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};