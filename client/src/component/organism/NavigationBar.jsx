import React from 'react';

// Atom
const TextAtom = ({ text, className }) => {
  return <span className={className}>{text}</span>;
};

// Organism
export default function NavbarHeader({title}) {
  return (
    <div className="flex h-28 w-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <TextAtom text={title} className="font-trispace text-5xl font-semibold text-white" />
    </div>
  );
};
