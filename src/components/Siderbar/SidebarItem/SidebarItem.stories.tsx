import type { Meta, StoryObj } from '@storybook/react';
import SidebarItem from './SidebarItem';
import { FaHome } from 'react-icons/fa';

const meta: Meta<typeof SidebarItem> = {
  title: 'Components/Sidebar/SidebarItem',
  component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  args: {
    icon: <FaHome />,
    label: 'Home',
    onClick: () => alert('Clicou em Home!'),
  },
};