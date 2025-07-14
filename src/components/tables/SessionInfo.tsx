import { FaUser, FaClock, FaMapMarkerAlt, FaDiscord } from "react-icons/fa";

interface SessionInfoProps {
  gmName: string;
  sessionDay: string;
  sessionTime: string;
  platform: string;
  location: string;
  contact: string;
}

export const SessionInfo: React.FC<SessionInfoProps> = ({
                                                          gmName,
                                                          sessionDay,
                                                          sessionTime,
                                                          platform,
                                                          location,
                                                          contact,
                                                        }) => {
  return (
    <div className="space-y-2 text-sm text-gray-300">
      <p><FaUser className="inline mr-2" /> Mestre: {gmName}</p>
      <p><FaClock className="inline mr-2" /> Sessões: {sessionDay}, {sessionTime}</p>
      <p><FaMapMarkerAlt className="inline mr-2" /> Local: {location}</p>
      <p><FaDiscord className="inline mr-2" /> Plataforma: {platform}</p>
      <p>Contato: {contact}</p>
    </div>
  );
};