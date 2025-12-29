import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMicroscope: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,13c0-4.962-4.037-9-9-9h-1v-2h-3V0h-3v2h-3v13h9V7h1c3.309,0,6,2.691,6,6s-2.691,6-6,6v-2H4v2H0v3h2v2h3v-2h9v2h3v-2.224c4.003-.912,7-4.5,7-8.776Zm-13-1h-3v-7h3v7Z"/></svg>
);

FiBsMicroscope.displayName = 'FiBsMicroscope';
