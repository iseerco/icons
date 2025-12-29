import React from 'react';
import type { IconProps } from '../../types';

export const SquareT: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,7h-4v11c0,.553-.448,1-1,1s-1-.447-1-1V7h-4c-.552,0-1-.447-1-1s.448-1,1-1h10c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>
);

SquareT.displayName = 'SquareT';
