import '../../index.css';

import React from "react";
import {TableHeader} from "../../components/tables/TableHeader/TableHeader.tsx";
import {TagList} from "../../components/tables/TagList/TagList.tsx";
import {SessionInfo} from "../../components/tables/sessions/SessionInfo/SessionInfo.tsx";
import {SessionHistory} from "../../components/tables/sessions/SessionHistory/SessionHistory.tsx";
import {DescriptionBox} from "../../components/tables/DescriptionBox/DescriptionBox.tsx";

interface Session {
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
  sessionHistory: Session[];
  onSubscribe: () => void;
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
      {/* Cabeçalho com imagem, título e botão */}
      <TableHeader
        imageUrl={imageUrl}
        title={title}
        system={system}
        gmName={gmName}
        onSubscribe={onSubscribe}
        actionButton={
        <button
          onClick={() => {onSubscribe(); alert("Inscrito!")}}
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded font-semibold text-white flex items-center gap-2 shadow-md"
          >
          Inscrever-se ({playerCount}/{playerMax} jogadores)
        </button>
        }
      />

      {/* Descrição */}
      <DescriptionBox description={description}/>

      {/* Corpo: informações e histórico */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna Esquerda */}
        <div className="space-y-4">
          <TagList tags={tags}/>
          <SessionInfo
            gmName={gmName}
            sessionDay={sessionDay}
            sessionTime={sessionTime}
            platform={platform}
            location={location}
            contact={contact}
          />
        </div>

        {/* Coluna Direita */}
        <SessionHistory sessionHistory={sessionHistory}/>
      </div>
    </div>
  );
};