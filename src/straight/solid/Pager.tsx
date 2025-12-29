import React from 'react';
import type { IconProps } from '../../types';

export const Pager: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,10H6v-2h12v2Zm6-5v17H0V5c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3ZM7,14h-3v2h3v-2Zm5,0h-3v2h3v-2Zm5,0h-3v2h3v-2Zm3-8H4v6h16v-6Z"/></svg>
);

Pager.displayName = 'Pager';
