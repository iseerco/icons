import React from 'react';
import type { IconProps } from '../../types';

export const FiBsEdit: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,16H16v5H3V3.409A.41.41,0,0,1,3.409,3H15.172l3-3H3.409A3.413,3.413,0,0,0,0,3.409V24H18.349L24,18.348V5.829l-3,3Z"/><path d="M5,19H8L23.4,3.6a2.121,2.121,0,0,0-3-3L5,16Z"/></svg>
);

FiBsEdit.displayName = 'FiBsEdit';
