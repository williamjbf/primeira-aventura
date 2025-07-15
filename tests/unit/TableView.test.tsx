import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TableView } from '../../src/views/tables/TableView';


describe('TableView', () => {
  const mockOnSubscribe = vi.fn();

  const mockProps = {
    imageUrl: 'https://placehold.co/112x144',
    title: 'A Torre do Eclipse',
    system: 'Tormenta 20',
    gmName: 'Lucas Andrade',
    description: 'Uma descrição qualquer.',
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
    ],
    onSubscribe: mockOnSubscribe
  };

  beforeEach(() => {
    mockOnSubscribe.mockClear();
  });

  it('renderiza o título, sistema e nome do mestre', () => {
    render(<TableView {...mockProps} />);

    expect(screen.getByText('A Torre do Eclipse')).toBeInTheDocument();
    expect(screen.getByText('Tormenta 20')).toBeInTheDocument();
    const matchesGmName = screen.getAllByText(/Lucas Andrade/i);
    expect(matchesGmName.length).toBe(2);
  });

  it('exibe a descrição da mesa', () => {
    render(<TableView {...mockProps} />);
    expect(screen.getByText(/descrição qualquer/i)).toBeInTheDocument();
  });

  it('renderiza as tags corretamente', () => {
    render(<TableView {...mockProps} />);
    mockProps.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('exibe o botão de inscrever-se com contagem correta', () => {
    render(<TableView {...mockProps} />);
    expect(
      screen.getByRole('button', { name: /Inscrever-se \(4\/6 jogadores\)/i })
    ).toBeInTheDocument();
  });

  it('chama onClick ao clicar no botão', () => {
    render(<TableView {...mockProps} />);
    const button = screen.getByRole('button', { name: /Inscrever-se/i });
    fireEvent.click(button);
    expect(mockOnSubscribe).toHaveBeenCalledTimes(1);
  });

  it('renderiza o histórico de sessões', () => {
    render(<TableView {...mockProps} />);
    expect(screen.getByText('Sessão 1 - Chegada ao vilarejo')).toBeInTheDocument();
    expect(screen.getByText('Sessão 2 - Encontro na floresta')).toBeInTheDocument();
  });
});
