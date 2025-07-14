import { TagList } from "./TagList.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TagList> = {
  title: "Components/Table/TagList",
  component: TagList,
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: ["Aventura", "Iniciantes", "RPG", "Online"],
  },
};