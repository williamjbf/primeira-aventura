import '@testing-library/jest-dom';

import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import SessionView from "../../src/views/tables/sessions/SessionView";

describe('SessionView', () => {
  const mockOnBack = vi.fn();

  const mockProps = {
    imageUrl: 'https://placehold.co/112x144',
    tableTitle: 'A Torre do Eclipse',
    system: 'Tormenta 20',
    gmName: 'Lucas Andrade',
    sessionTitle: 'Sessão 2 - Encontro na floresta',
    sessionSummary: `Durante esta sessão, os jogadores enfrentaram diversos desafios na floresta, encontrando aliados e inimigos inesperados.`,
    sessionHistory: [
      {title: 'Sessão 1 - Chegada ao vilarejo', date: '06/07/2025'},
      {title: 'Sessão 2 - Encontro na floresta', date: '13/07/2025'},
      {title: 'Sessão 3 - Segredos da cripta', date: '20/07/2025'},
    ],
    onBack: mockOnBack,
  };

  beforeEach(() => {
    mockOnBack.mockClear();
  });

  it('renderiza título da mesa, sistema e mestre', () => {
    render(<SessionView {...mockProps} />);
    expect(screen.getByText('A Torre do Eclipse')).toBeInTheDocument();
    expect(screen.getByText('Tormenta 20')).toBeInTheDocument();
    expect(screen.getByText(/Lucas Andrade/i)).toBeInTheDocument();
  });

  it('exibe o título da sessão e o resumo corretamente', () => {
    render(<SessionView {...mockProps} />);
    expect(screen.getByText(/Título da Sessão:/i)).toBeInTheDocument();
    const matchesSessionTitles = screen.getAllByText(mockProps.sessionTitle);
    expect(matchesSessionTitles.length).toBe(2);
    expect(screen.getByText(mockProps.sessionSummary)).toBeInTheDocument();
  });

  it('renderiza o histórico de sessões com destaque na sessão atual', () => {
    render(<SessionView {...mockProps} />);
    const sessionItems = screen.getAllByRole('listitem');
    expect(sessionItems.length).toBe(mockProps.sessionHistory.length);

    // Verifica que o item da sessão atual tem a classe com destaque
    const currentSessionItem = sessionItems.find(item =>
      item.className.includes('bg-blue-600') && item.textContent?.includes(mockProps.sessionTitle)
    );
    expect(currentSessionItem).toBeDefined();
  });

  it('exibe botão de voltar e chama alert ao clicar', () => {
    // Mocka global alert
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
    });

    render(<SessionView {...mockProps} />);
    const backButton = screen.getByRole('button');
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(alertMock).toHaveBeenCalledWith('Voltando...');

    alertMock.mockRestore();
  });
});