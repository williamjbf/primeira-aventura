import React from 'react';
import {TableHeader} from "../../../components/tables/TableHeader/TableHeader.tsx";
import TableActionButton from "../../../components/tables/TableActionButton/TableActionButton.tsx";

interface SessionInfo {
  title: string;
  date: string;
}

interface SessionViewProps {
  imageUrl: string;
  tableTitle: string;
  system: string;
  gmName: string;
  sessionTitle: string;
  sessionSummary: string;
  sessionHistory: SessionInfo[];
  onBack?: () => void;
}

export const SessionView: React.FC<SessionViewProps> = (
  {
    imageUrl,
    tableTitle,
    system,
    gmName,
    sessionTitle,
    sessionSummary,
    sessionHistory,
    onBack,
  }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl space-y-6 border border-gray-700">
      {/* Header */}
      <TableHeader
        imageUrl={imageUrl}
        title={tableTitle}
        system={system}
        gmName={gmName}
        actionButton={
          <TableActionButton variant="back" onClick={() => alert("Voltando...")}/>
        }
      />

      {/* Título da Sessão */}
      <div className="text-center">
        <p className="text-lg text-blue-400 font-semibold border-b border-blue-600 inline-block px-4 pb-1">
          Título da Sessão: <span className="italic font-normal">{sessionTitle}</span>
        </p>
      </div>

      {/* Corpo dividido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna Esquerda: Histórico de Sessões */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
            Histórico de Sessões
          </h3>
          <ul className="space-y-2">
            {sessionHistory.map((session, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center p-3 rounded-md border border-gray-700 transition-colors ${session.title === sessionTitle
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-100'
                }`}
              >
                <span className="text-sm">{session.title}</span>
                <span className="text-xs text-gray-400">{session.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Direita: Descrição da Sessão */}
        <div className="space-y-2 max-w-prose break-words">
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
            Resumo da Sessão
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line max-w-[600px]">
            {sessionSummary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionView;