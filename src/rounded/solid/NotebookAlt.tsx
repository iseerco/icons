import React from 'react';
import type { IconProps } from '../../types';

export const NotebookAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,24c-2.05,0-3.8-1.24-4.58-3h-1.42c-.55,0-1-.45-1-1s.45-1,1-1h1v-2h-1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2h-1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2h-1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2h-1c-.55,0-1-.45-1-1s.45-1,1-1h1.42c.77-1.76,2.53-3,4.58-3V24ZM18,0H10V24h8c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Z"/></svg>
);

NotebookAlt.displayName = 'NotebookAlt';
