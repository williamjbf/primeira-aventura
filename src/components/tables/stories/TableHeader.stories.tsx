import '../../../index.css';

import {TableHeader} from "../TableHeader";
import {TableActionButton} from "../TableActionButton";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Inscrever: Story = {
  args: {
    imageUrl: "https://placehold.co/112x144",
    title: "Mesa de D&D",
    system: "Dungeons & Dragons 5e",
    gmName: "Mestre João",
    actionButton: (
      <TableActionButton variant="subscribe" onClick={() => alert("Inscrito!")}/>
    ),
  },
};

export const Voltar: Story = {
  args: {
    imageUrl: "https://placehold.co/112x144",
    title: "Mesa de D&D",
    system: "Dungeons & Dragons 5e",
    gmName: "Mestre João",
    actionButton: (
      <TableActionButton variant="back" onClick={() => alert("Voltando...")}/>
    ),
  },
};