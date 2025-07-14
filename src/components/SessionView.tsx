import React from 'react';
import { FaArrowLeft, FaUser, FaClock } from 'react-icons/fa';

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
  summary: string;
  sessionHistory: SessionInfo[];
  onBack?: () => void;
}

export const SessionView: React.FC<SessionViewProps> = ({
                                                          imageUrl,
                                                          tableTitle,
                                                          system,
                                                          gmName,
                                                          sessionTitle,
                                                          summary,
                                                          sessionHistory,
                                                          onBack,
                                                        }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl space-y-6 border border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-start">
          <img src={imageUrl} alt={tableTitle} className="w-28 h-36 rounded-md object-cover border border-gray-600" />
          <div>
            <h2 className="text-3xl font-bold leading-snug text-white drop-shadow">
              {tableTitle}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{system}</p>
            <p className="text-gray-300 text-sm flex items-center gap-2 mt-1">
              <FaUser className="text-sm" /> {gmName}
            </p>
          </div>
        </div>

        <button
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded font-medium text-sm text-white flex items-center gap-2 shadow-sm"
        >
          <FaArrowLeft /> Voltar à Mesa
        </button>
      </div>

      {/* Sessão Atual Destaque */}
      <div className="text-center">
        <p className="text-lg text-blue-400 font-semibold border-b border-blue-600 inline-block px-4 pb-1">
          Sessão atual: <span className="italic font-normal">{sessionTitle}</span>
        </p>
      </div>

      {/* Corpo dividido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna Esquerda: Lista de Sessões */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
            Outras Sessões
          </h3>
          <ul className="space-y-2">
            {sessionHistory.map((session, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center p-3 rounded-md border border-gray-700 transition-colors ${session.title === sessionTitle ? 'bg-blue-800 text-white font-semibold' : 'bg-gray-800 hover:bg-gray-700 text-gray-100'}`}
              >
                <span className="text-sm">{session.title}</span>
                <span className="text-xs text-gray-400">{session.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Direita: Resumo da Sessão */}
        <div className="space-y-2 max-w-prose break-words">
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
            Resumo da Sessão
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line max-w-[600px]">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionView;