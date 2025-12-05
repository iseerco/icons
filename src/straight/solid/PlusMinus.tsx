import React from 'react';
import type { IconProps } from '../../types';

export const PlusMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,8v2h-8v8h-2v-8H3v-2h8V0h2v8h8ZM3,24h18v-2H3v2Z"/></svg>
);

PlusMinus.displayName = 'PlusMinus';
