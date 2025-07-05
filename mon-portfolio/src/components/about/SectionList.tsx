type SectionListProps = {
  title?: string;
  items: string[];
};

export default function SectionList({ title, items }: SectionListProps) {
  return (
    <div className="mb-4 text-white">
      {title && <div className="font-semibold mb-1">{title}</div>}
      <ul className="list-disc list-inside ml-4">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
