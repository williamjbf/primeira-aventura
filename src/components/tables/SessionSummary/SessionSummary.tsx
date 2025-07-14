import React from 'react';

interface SessionDescriptionProps {
  description: string;
}

export const SessionSummary: React.FC<SessionDescriptionProps> = ({ description }) => {
  return (
    <div className="space-y-2 max-w-prose break-words">
      <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
        Descrição da Sessão
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line max-w-[600px]">
        {description}
      </p>
    </div>
  );
};

export default SessionSummary;