// components/about/ProjectRepoButton.jsx (ou components/ProjectRepoButton.jsx)
import Link from 'next/link';
import React from 'react';

type ProjectRepoButtonProps = {
  repoLink: string;
  className?: string;
};

export default function ProjectRepoButton({ repoLink, className }: ProjectRepoButtonProps) {
  return (
    <div className={`text-center py-8 ${className || ''}`}>
      <Link href={repoLink} legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Voir le Répertoire du Projet sur GitHub
        </a>
      </Link>
    </div>
  );
}