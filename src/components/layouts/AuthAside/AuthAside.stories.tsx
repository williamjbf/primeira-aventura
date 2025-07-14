import type { Meta, StoryObj } from '@storybook/react';
import AuthAside from './AuthAside';

const meta: Meta<typeof AuthAside> = {
  title: 'Views/Auth/AuthAside',
  component: AuthAside,
};

export default meta;
type Story = StoryObj<typeof AuthAside>;

export const Default: Story = {
  args: {
    title: 'Seja bem-vindo',
    subtitle: '"Entre para sua próxima aventura!"',
    logoSrc: 'https://placehold.co/200x200',
  },
};