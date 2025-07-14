import '../../../index.css';

import type { Meta, StoryObj } from '@storybook/react';
import { TableView } from '../TableView.tsx';

const meta: Meta<typeof TableView> = {
  title: 'Components/Table/TableView',
  component: TableView,
};
export default meta;

type Story = StoryObj<typeof TableView>;

export const Default: Story = {
  args: {
    imageUrl: 'https://placehold.co/112x144',
    title: 'A Torre do Eclipse',
    system: 'Tormenta 20',
    gmName: 'Lucas Andrade',
    description: 'A mesa de RPG "A Torre do Eclipse" é ambientada em um mundo de fantasia épica, onde os jogadores embarcam em emocionantes aventuras em busca de poder e glória. A história se passa em torno de uma misteriosa torre que surge apenas durante os eclipses lunares, e que é repleta de segredos, criaturas perigosas e artefatos mágicos.' +
      'Os personagens dos jogadores são heróis destemidos, cada um com habilidades únicas e motivações pessoais, que se unem em uma jornada para explorar a torre e desvendar seus enigmas. Eles devem enfrentar desafios diversos, como enigmas complexos, batalhas épicas e diplomacia delicada com diversas facções que habitam a torre.' +
      'Durante a campanha, os jogadores terão a oportunidade de tomar decisões importantes que moldam o destino do mundo ao seu redor, enquanto descobrem mais sobre a história da torre e as forças sinistras que estão em jogo. "A Torre do Eclipse" promete uma experiência de jogo imersiva e repleta de reviravoltas inesperadas, garantindo horas de diversão para os aventureiros mais ousados.',
    tags: ['Aventura', 'Exploração', 'Combate', 'Mistério'],
    sessionDay: 'Sábados',
    sessionTime: '20:00',
    platform: 'Foundry VTT',
    location: 'Servidor do Discord',
    contact: '@lucas#1337',
    playerCount: 4,
    playerMax: 6,
    sessionHistory: [
      { title: 'Sessão 1 - Chegada ao vilarejo', date: '06/07/2025' },
      { title: 'Sessão 2 - Encontro na floresta', date: '13/07/2025' },
      { title: 'Sessão 3 - Segredos da cripta', date: '20/07/2025' },
    ],
  },
};