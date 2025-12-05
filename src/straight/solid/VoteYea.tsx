import React from 'react';
import type { IconProps } from '../../types';

export const VoteYea: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,2H8c-1.65,0-3,1.35-3,3v12h14V5c0-1.65-1.35-3-3-3Zm-3,10.27c-.47,.47-1.1,.73-1.77,.73s-1.3-.26-1.77-.73l-1.94-1.94,1.41-1.41,1.94,1.94c.13,.13,.28,.15,.35,.15s.23-.02,.35-.15l3.94-3.94,1.41,1.41-3.94,3.94Zm11,2.73v7H0v-7c0-1.65,1.35-3,3-3v7H21v-7c1.65,0,3,1.35,3,3Z"/></svg>
);

VoteYea.displayName = 'VoteYea';
