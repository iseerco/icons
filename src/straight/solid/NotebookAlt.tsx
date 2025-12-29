import React from 'react';
import type { IconProps } from '../../types';

export const NotebookAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,24v-3H1v-2H3v-2H1v-2H3v-2H1v-2H3v-2H1v-2H3v-2H1V3H3V0h5V24H3ZM20,0H10V24h10c1.65,0,3-1.35,3-3V3c0-1.65-1.35-3-3-3Z"/></svg>
);

NotebookAlt.displayName = 'NotebookAlt';
