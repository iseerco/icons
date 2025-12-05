import React from 'react';
import type { IconProps } from '../../types';

export const ArrowLeftFromLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,11H20v2H3l4.5,4.5-1.41,1.41L.59,13.41c-.78-.78-.78-2.05,0-2.83L6.09,5.09l1.41,1.41L3,11ZM22,0V24h2V0h-2Z"/></svg>
);

ArrowLeftFromLine.displayName = 'ArrowLeftFromLine';
