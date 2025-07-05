'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectBox({ title, description, link }: { title: string, description: string, link: string }) {
  const [isClicked, setIsClicked] = useState(false); // State to track if the box is clicked

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the clicked state on each click
  };

  return (
    <div
      className={`
        relative flex flex-col justify-between
        bg-zinc-800 rounded-lg p-6 m-4 max-w-sm mx-auto
        transform transition-all duration-300 ease-in-out /* Use transition-all for smooth changes */
        shadow-lg /* Initial shadow */
        hover:bg-zinc-700 /* Becomes lighter on hover */
        hover:scale-105 /* Slightly larger on hover */
        hover:shadow-2xl hover:shadow-[#c9e560] 
      `}
      onClick={handleClick} // Add onClick handler to the div
      style={{ cursor: 'pointer' }} // Indicate that the div is clickable
    >
      <div className="flex-grow"> {/* Allows content to grow, pushing button to bottom */}
        <h3 className="text-2xl font-semibold text-white mb-3 text-center"> {/* Centered title */}
          {title}
        </h3>
        <p className="text-zinc-300 mb-4 text-justify"> {/* Justified text for better readability */}
          {description}
        </p>
      </div>

      {link && (
        <div className="mt-auto self-start"> {/* Use mt-auto and self-start to position at bottom-left */}
          <Link href={link} legacyBehavior>
            <a className="inline-block bg-[#c9e560] hover:bg-[#b2cc4c] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              En savoir plus
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}