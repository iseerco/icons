import React from 'react';
import type { IconProps } from '../../types';

export const SquareSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.5,19h-5c-2.48,0-4.5-2.02-4.5-4.5v-5c0-2.48,2.02-4.5,4.5-4.5h5c2.48,0,4.5,2.02,4.5,4.5v5c0,2.48-2.02,4.5-4.5,4.5ZM9.5,7c-1.38,0-2.5,1.12-2.5,2.5v5c0,1.38,1.12,2.5,2.5,2.5h5c1.38,0,2.5-1.12,2.5-2.5v-5c0-1.38-1.12-2.5-2.5-2.5h-5Z"/></svg>
);

SquareSmall.displayName = 'SquareSmall';
