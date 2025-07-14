import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from './RegisterForm.tsx';

const meta: Meta<typeof RegisterForm> = {
  title: 'Views/Auth/RegisterForm',
  component: RegisterForm,
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};