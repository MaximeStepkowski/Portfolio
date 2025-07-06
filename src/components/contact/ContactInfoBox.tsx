import React from 'react';

type ContactInfoBoxProps = {
  email: string;
  className?: string;
};

export default function ContactInfoBox({ email, className }: ContactInfoBoxProps) {
  return (
    <div
      className={`
        bg-zinc-900 rounded-lg p-8 mx-auto max-w-lg
        text-center border-2 border-solid
        flex flex-col items-center justify-center
        ${className || ''}
      `}
      style={{ borderColor: '#c9e560' }} 
    >
      <p className="text-zinc-300 text-lg mb-2">Mon adresse e-mail :</p>
      <a href={`mailto:${email}`} className="text-[#c9e560] text-2xl font-semibold hover:underline">
        {email}
      </a>
    </div>
  );
}