import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar.tsx';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};