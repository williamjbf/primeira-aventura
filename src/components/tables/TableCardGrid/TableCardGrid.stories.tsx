import type {Meta, StoryObj} from '@storybook/react';
import {TableCardGrid} from './TableCardGrid.tsx';

const meta: Meta<typeof TableCardGrid> = {
  title: 'Components/Table/TableCardGrid',
  component: TableCardGrid,
};
export default meta;

type Story = StoryObj<typeof TableCardGrid>;

const sampleTables = Array.from({length: 24}).map((_, i) => ({
  imageUrl: 'https://placehold.co/60x84',
  title: `Mesa ${i + 1}`,
  system: i % 2 === 0 ? 'D&D 5e' : 'Tormenta 20',
  gmName: `Mestre ${i + 1}`,
  timeAgo: `${(i + 1) * 3} min ago`,
}));

export const Default: Story = {
  args: {
    tables: sampleTables,
  },
};