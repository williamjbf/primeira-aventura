import { SessionHistory } from "./SessionHistory.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SessionHistory> = {
  title: "Components/Table/Session/SessionHistory",
  component: SessionHistory,
};

export default meta;
type Story = StoryObj<typeof SessionHistory>;

export const Default: Story = {
  args: {
    sessionHistory: [
      { title: "Sessão 1 - Introdução", date: "01/07/2025" },
      { title: "Sessão 2 - A Masmorra", date: "08/07/2025" },
      { title: "Sessão 3 - Confronto Final", date: "15/07/2025" },
    ],
  },
};