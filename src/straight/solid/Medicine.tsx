import React from 'react';
import type { IconProps } from '../../types';

export const Medicine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18 5h-12v-5h12zm0 4h-2.01l.01-2h-7.952l-.048 2h-2a3 3 0 0 0 -3 3v12h18v-12a3 3 0 0 0 -3-3zm-2 8h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"/></svg>
);

Medicine.displayName = 'Medicine';
