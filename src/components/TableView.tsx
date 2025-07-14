import React from 'react';
import {FaClock, FaDiscord, FaMapMarkerAlt, FaSignInAlt, FaUser} from 'react-icons/fa';

interface SessionInfo {
  title: string;
  date: string;
}

interface TableViewProps {
  imageUrl: string;
  title: string;
  system: string;
  gmName: string;
  description: string;
  tags: string[];
  sessionDay: string;
  sessionTime: string;
  platform: string;
  location: string;
  contact: string;
  playerCount: number;
  playerMax: number;
  sessionHistory: SessionInfo[];
  onSubscribe?: () => void;
}

export const TableView: React.FC<TableViewProps> = (
  {
    imageUrl,
    title,
    system,
    gmName,
    description,
    tags,
    sessionDay,
    sessionTime,
    platform,
    location,
    contact,
    playerCount,
    playerMax,
    sessionHistory,
    onSubscribe,
  }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl space-y-6 border border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-start">
          <img src={imageUrl} alt={title} className="w-28 h-36 rounded-md object-cover border border-gray-600"/>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-white drop-shadow">
              {title}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{system}</p>
            <p className="text-gray-300 text-sm flex items-center gap-2 mt-1">
              <FaUser className="text-sm"/> {gmName}
            </p>
          </div>
        </div>

        <button
          onClick={onSubscribe}
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded font-semibold text-white flex items-center gap-2 shadow-md"
        >
          <FaSignInAlt/> Inscrever-se ({playerCount}/{playerMax})
        </button>
      </div>

      {/* Descrição */}
      <p className="text-sm text-gray-300 border-l-4 border-blue-600 pl-4 italic">
        {description}
      </p>

      {/* Corpo dividido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna Esquerda: Infos da Mesa */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-700 text-xs px-3 py-1 rounded-full font-medium tracking-wide shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-300"><FaUser className="inline mr-2"/> Mestre: {gmName}</p>
          <p className="text-sm text-gray-300"><FaClock className="inline mr-2"/> Sessões: {sessionDay}, {sessionTime}
          </p>
          <p className="text-sm text-gray-300"><FaMapMarkerAlt className="inline mr-2"/> Local: {location}</p>
          <p className="text-sm text-gray-300"><FaDiscord className="inline mr-2"/> Plataforma: {platform}</p>
          <p className="text-sm text-gray-300">Contato: {contact}</p>
        </div>

        {/* Coluna Direita: Histórico de Sessões */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
            Histórico de Sessões
          </h3>
          <ul className="space-y-2">
            {sessionHistory.map((session, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <span className="text-sm text-gray-100 font-medium">{session.title}</span>
                <span className="text-xs text-gray-400">{session.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableView;
