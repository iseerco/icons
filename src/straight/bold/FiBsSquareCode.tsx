import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareCode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.973,17.059l-2.121-2.121,2.938-2.938-2.938-2.937,2.121-2.121,3.299,3.298c.97,.971,.97,2.549,0,3.519l-3.3,3.3Zm-3.824-2.121l-2.938-2.938,2.938-2.937-2.121-2.121-3.3,3.299c-.969,.97-.969,2.548,0,3.519l3.299,3.299,2.121-2.121ZM24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5ZM3,3.5c0-.276,.225-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5V21H3V3.5Z"/></svg>
);

FiBsSquareCode.displayName = 'FiBsSquareCode';
