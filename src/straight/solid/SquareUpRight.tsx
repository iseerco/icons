import React from 'react';
import type { IconProps } from '../../types';

export const SquareUpRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-2,15h-2v-6.586l-10.793,10.793-1.414-1.414L15.586,7h-6.586v-2h8c1.103,0,2,.897,2,2v8Z"/>
</svg>
);

SquareUpRight.displayName = 'SquareUpRight';
