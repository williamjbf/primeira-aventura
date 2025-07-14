import { TableHeader } from "../TableHeader.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    imageUrl: "https://placehold.co/112x144",
    title: "Mesa de D&D",
    system: "Dungeons & Dragons 5e",
    gmName: "Mestre João",
    playerCount: 3,
    playerMax: 5,
    onSubscribe: () => alert("Inscrito!"),
  },
};