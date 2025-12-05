import React from 'react';
import type { IconProps } from '../../types';

export const NoteSticky: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H17.41l6.59-6.59V3c0-1.65-1.35-3-3-3ZM2,3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v13h-6v6H2V3Zm18.59,15l-2.59,2.59v-2.59h2.59Z"/></svg>
);

NoteSticky.displayName = 'NoteSticky';
