import React from 'react';
import type { IconProps } from '../../types';

export const Italic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,0H7A1,1,0,0,0,7,2h5.354L9.627,22H4a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H11.646L14.373,2H20a1,1,0,0,0,0-2Z"/></svg>
);

Italic.displayName = 'Italic';
