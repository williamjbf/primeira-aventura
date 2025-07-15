import type { Meta, StoryObj } from '@storybook/react';
import SidebarExpandableItem from './SidebarExpandableItem';
import { FaDungeon } from 'react-icons/fa';

const meta: Meta<typeof SidebarExpandableItem> = {
  title: 'Components/Sidebar/SidebarExpandableItem',
  component: SidebarExpandableItem,
};

export default meta;
type Story = StoryObj<typeof SidebarExpandableItem>;

export const Default: Story = {
  args: {
    icon: <FaDungeon />,
    label: 'Minhas Mesas',
    items: ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'],
    maxVisible: 3,
  },
};