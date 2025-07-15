import type { Meta, StoryObj } from '@storybook/react';
import SidebarFooter from './SidebarFooter';

const meta: Meta<typeof SidebarFooter> = {
  title: 'Components/Sidebar/SidebarFooter',
  component: SidebarFooter,
};

export default meta;
type Story = StoryObj<typeof SidebarFooter>;

export const Default: Story = {};