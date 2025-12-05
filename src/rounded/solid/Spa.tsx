import React from 'react';
import type { IconProps } from '../../types';

export const Spa: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 24c-7.851 0-12-1.383-12-4s4.149-4 12-4c7.963 0 12 1.346 12 4s-4.037 4-12 4zm.5-9c-7.852 0-9.5-2.175-9.5-4s1.648-4 9.5-4c5.948 0 9.5 1.495 9.5 4s-3.552 4-9.5 4zm-2.5-9c-3.645 0-6-1.178-6-3s2.355-3 6-3 6 1.178 6 3-2.355 3-6 3z"/></svg>
);

Spa.displayName = 'Spa';
