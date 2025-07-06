// components/SocialLinks.jsx
import Link from 'next/link';
import React from 'react';
// Si vous utilisez Next.js 13+ et avez configuré l'optimisation d'image (ce qui n'est pas le cas avec unoptimized: true),
// vous pourriez utiliser 'next/image'. Pour un site statique avec unoptimized: true,
// une balise <img> standard est souvent plus simple et directe.

type SocialLinksProps = {
  linkedinUrl: string;
  githubUrl: string;
  className?: string;
};

export default function SocialLinks({ linkedinUrl, githubUrl, className }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-6 mt-8 ${className || ''}`}>
      {linkedinUrl && (
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#c9e560] hover:bg-[#b2cc4c] text-black font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          <img src="/app/linkedin.svg" alt="LinkedIn Logo" className="w-6 h-6 mr-3" />
          LinkedIn
        </Link>
      )}
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#c9e560] hover:bg-[#b2cc4c] text-black font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          <img src="/app/github.svg" alt="GitHub Logo" className="w-6 h-6 mr-3" />
          GitHub
        </Link>
      )}
    </div>
  );
}