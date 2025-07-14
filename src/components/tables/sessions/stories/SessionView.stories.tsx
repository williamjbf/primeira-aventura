import '../../../../index.css';

import type { Meta, StoryObj } from '@storybook/react';
import { SessionView } from '../SessionView.tsx';

const meta: Meta<typeof SessionView> = {
  title: 'Components/Table/Session/SessionView',
  component: SessionView,
};
export default meta;

type Story = StoryObj<typeof SessionView>;

export const Sessao1: Story = {
  args: {
    imageUrl: 'https://placehold.co/112x144',
    tableTitle: 'A Torre do Eclipse',
    system: 'Tormenta 20',
    gmName: 'Lucas Andrade',
    sessionTitle: 'Sessão 1 - Chegada ao vilarejo',
    sessionSummary: `Os heróis chegam a um pequeno vilarejo à sombra da misteriosa torre. Eles são recebidos com desconfiança pelos moradores, que vivem com medo das lendas que cercam a torre e dos eclipses lunares. Durante a exploração, os jogadores descobrem rumores sobre desaparecimentos e estranhas criaturas que circulam na região. Ao interagir com os habitantes, eles obtêm pistas sobre a localização de antigas relíquias que podem ajudar em sua jornada, além de se deparar com um enigma que guiará seus próximos passos.`,
    sessionHistory: [
      { title: 'Sessão 1 - Chegada ao vilarejo', date: '06/07/2025' },
      { title: 'Sessão 2 - Encontro na floresta', date: '13/07/2025' },
      { title: 'Sessão 3 - Segredos da Cripta', date: '13/07/2025' },
    ],
    onBack: () => alert('Voltando para a mesa...'),
  },
};

export const Sessao2: Story = {
  args: {
    imageUrl: 'https://placehold.co/112x144',
    tableTitle: 'A Torre do Eclipse',
    system: 'Tormenta 20',
    gmName: 'Lucas Andrade',
    sessionTitle: 'Sessão 2 - Encontro na floresta',
    sessionSummary: `Enquanto seguem em direção à torre, os aventureiros cruzam uma densa floresta, onde se deparam com uma facção rival que busca conquistar os segredos da torre para seus próprios fins. Um violento confronto ocorre, forçando os jogadores a escolher entre a batalha ou a negociação. Durante o encontro, um dos membros da facção revela informações valiosas sobre os desafios que aguardam na torre, mas denunciará os heróis se eles não decidirem um alinhamento para a sua causa.`,
    sessionHistory: [
      { title: 'Sessão 1 - Chegada ao vilarejo', date: '06/07/2025' },
      { title: 'Sessão 2 - Encontro na floresta', date: '13/07/2025' },
      { title: 'Sessão 3 - Segredos da Cripta', date: '13/07/2025' },
    ],
    onBack: () => alert('Voltando para a mesa...'),
  },
};

export const Sessao3: Story = {
  args: {
    imageUrl: 'https://placehold.co/112x144',
    tableTitle: 'A Torre do Eclipse',
    system: 'Tormenta 20',
    gmName: 'Lucas Andrade',
    sessionTitle: 'Sessão 3 - Segredos da Cripta',
    sessionSummary: `Os personagens descobrem uma cripta antiga nas proximidades da torre durante suas investigações. Dentro da cripta, eles encontram artefatos mágicos e antigos escritos que revelam mais sobre a história da torre e as forças que a cercam. No entanto, a cripta também é guardada por criaturas sombrias e armadilhas mortais. A sessão culmina em uma revelação surpreendente sobre a origem da torre e a verdadeira natureza do eclipse, desafiando os jogadores a reconsiderar suas motivações e alianças antes de avançar para a próxima fase da aventura.`,
    sessionHistory: [
      { title: 'Sessão 1 - Chegada ao vilarejo', date: '06/07/2025' },
      { title: 'Sessão 2 - Encontro na floresta', date: '13/07/2025' },
      { title: 'Sessão 3 - Segredos da Cripta', date: '13/07/2025' },
    ],
    onBack: () => alert('Voltando para a mesa...'),
  },
};