import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTransporter3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-4.333,2.167l2.333-1.167-2.333-1.167-1.167-2.333-1.167,2.333L.5,3.5l2.333,1.167,1.167,2.333,1.167-2.333Zm16.833,10.833l-1-2-1,2-2,1,2,1,1,2,1-2,2-1-2-1ZM4,24h16v-3H4v3Zm12-5v-3h-8v3h8Zm1-8H7v3h10v-3Zm1-5H6v3h12v-3Z"/></svg>
);

FiBsTransporter3.displayName = 'FiBsTransporter3';
