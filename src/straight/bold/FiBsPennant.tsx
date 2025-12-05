import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPennant: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4.646,3.782A2.5,2.5,0,1,0,1,4.5V24H4V20.493L24,12ZM4,6.767,16.326,12,4,17.233Z"/></svg>
);

FiBsPennant.displayName = 'FiBsPennant';
