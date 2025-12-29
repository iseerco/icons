import React from 'react';
import type { IconProps } from '../../types';

export const Box: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V9H1V24H23V9h1ZM2,3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V7H2ZM21,22H3V9H21Z"/><rect x="8" y="12" width={size} height={size}/></g></svg>
);

Box.displayName = 'Box';
