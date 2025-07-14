import '../index.css';

import type {Meta, StoryObj} from '@storybook/react';
import {TableCard} from './TableCard';

const meta: Meta<typeof TableCard> = {
  title: 'Components/TableCard',
  component: TableCard,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof TableCard>;

export const Default: Story = {
  args: {
    imageUrl: 'https://placehold.co/60x84',
    title: 'A Floresta Sombria',
    system: 'Tormenta 20',
    gmName: 'Larissa',
    timeAgo: '6 min atrás',
  },
};
