import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPlusMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,7.5v3h-7.5v7.5h-3v-7.5H3v-3h7.5V0h3v7.5h7.5ZM3,24h18v-3H3v3Z"/></svg>
);

FiBsPlusMinus.displayName = 'FiBsPlusMinus';
