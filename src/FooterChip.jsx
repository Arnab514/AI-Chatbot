import React from 'react';
import { FaGithub } from 'react-icons/fa';

const FooterChip = () => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg">
      <a
        href="https://github.com/Arnab514"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <FaGithub className="text-xl" />
        <span className="text-sm font-medium">Made by Arnab</span>
      </a>
    </div>
  );
};

export default FooterChip;
