import React from 'react';
import nadermaLogo from '../assets/naderma-logo.png';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={nadermaLogo}
        alt="NADERMA" 
        className="h-8 w-auto"
      />
    </div>
  );
}