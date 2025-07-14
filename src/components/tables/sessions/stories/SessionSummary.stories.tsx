import type {Meta, StoryObj} from "@storybook/react";
import {SessionSummary} from "../SessionSummary";

const meta: Meta<typeof SessionSummary> = {
  title: "Components/Table/Session/SessionSummary",
  component: SessionSummary,
};

export default meta;
type Story = StoryObj<typeof SessionSummary>;

export const Default: Story = {
  args: {
    description: 'Os heróis chegam a um pequeno vilarejo à sombra da misteriosa torre. Eles são recebidos com desconfiança pelos moradores, que vivem com medo das lendas que cercam a torre e dos eclipses lunares. Durante a exploração, os jogadores descobrem rumores sobre desaparecimentos e estranhas criaturas que circulam na região. Ao interagir com os habitantes, eles obtêm pistas sobre a localização de antigas relíquias que podem ajudar em sua jornada, além de se deparar com um enigma que guiará seus próximos passos.',
  },
};