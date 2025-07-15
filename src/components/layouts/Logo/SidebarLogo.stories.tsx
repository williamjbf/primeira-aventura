import type { Meta, StoryObj } from '@storybook/react';
import SidebarLogo from './Logo';

const meta: Meta<typeof SidebarLogo> = {
  title: 'Components/Sidebar/SidebarLogo',
  component: SidebarLogo,
};

export default meta;
type Story = StoryObj<typeof SidebarLogo>;

export const Default: Story = {};