import React from 'react';
import type { IconProps } from '../../types';

export const ArrowSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0Zm1,22H2V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1Zm-9.758-5.758-1.414,1.414L6.585,13.414a2,2,0,0,1,0-2.829l4.243-4.242,1.414,1.414L9,11h9v2H9Z"/></svg>
);

ArrowSquareLeft.displayName = 'ArrowSquareLeft';
