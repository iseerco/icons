import React from 'react';
import type { IconProps } from '../../types';

export const Columns3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,22H0V5c0-1.654,1.346-3,3-3h4v20Zm2,0h6V2h-6v20ZM21,2h-4v20h7V5c0-1.654-1.346-3-3-3Z"/></svg>
);

Columns3.displayName = 'Columns3';
