interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
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
  );
};