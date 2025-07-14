interface DescriptionBoxProps {
  description: string;
}

export const DescriptionBox: React.FC<DescriptionBoxProps> = ({ description }) => {
  return (
    <p className="text-sm text-gray-300 border-l-4 border-blue-600 pl-4 italic">
      {description}
    </p>
  );
};