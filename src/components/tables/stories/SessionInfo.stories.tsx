import { SessionInfo } from "../SessionInfo.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SessionInfo> = {
  title: "Components/Table/SessionInfo",
  component: SessionInfo,
};

export default meta;
type Story = StoryObj<typeof SessionInfo>;

export const Default: Story = {
  args: {
    gmName: "Mestre João",
    sessionDay: "Sábados",
    sessionTime: "20h",
    platform: "Discord",
    location: "Online",
    contact: "@mestrejoao",
  },
};