interface Session {
  title: string;
  date: string;
}

interface SessionHistoryProps {
  sessionHistory: Session[];
}

export const SessionHistory: React.FC<SessionHistoryProps> = ({ sessionHistory }) => {
  return (
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
  );
};