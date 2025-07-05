import React from 'react';

type KeyValueItem = {
  title: string;
  description: string;
};

type KeyValueListProps = {
  items: KeyValueItem[];
  className?: string; // Optionnel pour ajouter des classes Tailwind au conteneur
};

export default function KeyValueList({ items, className }: KeyValueListProps) {
  return (
    <ul className={`list-disc list-inside text-white mb-4 ${className || ''}`}>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <span className="font-bold">{item.title}</span> : {item.description}
        </li>
      ))}
    </ul>
  );
}