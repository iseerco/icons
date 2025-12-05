import React from 'react';
import type { IconProps } from '../../types';

export const NotesMedical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m2,22h18v2H0V7c.005-1.267.806-2.394,2-2.816v17.816Zm13-8v-3h3v-2h-3v-3h-2v3h-3v2h3v3h2ZM24,3v12.029l-4.971,4.971H4V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3ZM6,18h12v-4h4V3c0-.552-.448-1-1-1H7c-.552,0-1,.448-1,1v15Z"/></svg>
);

NotesMedical.displayName = 'NotesMedical';
