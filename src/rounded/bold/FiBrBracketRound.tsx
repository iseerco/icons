import React from 'react';
import type { IconProps } from '../../types';

export const FiBrBracketRound: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.5,24c-.3,0-.59-.09-.86-.27-.23-.16-5.64-4.04-5.64-11.73S13.41,.43,13.64,.27c.68-.47,1.62-.31,2.09,.37,.48,.68,.31,1.61-.37,2.09-.17,.12-4.36,3.18-4.36,9.27s4.19,9.15,4.37,9.28c.67,.48,.83,1.41,.36,2.09-.29,.41-.76,.64-1.23,.64Z"/></svg>
);

FiBrBracketRound.displayName = 'FiBrBracketRound';
