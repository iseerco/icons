import React from 'react';
import type { IconProps } from '../../types';

export const Hotel: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,0H6c-1.654,0-3,1.346-3,3V24h7v-6h-3v-2h10v2h-3v6h7V3c0-1.654-1.346-3-3-3ZM9,14h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z"/></svg>
);

Hotel.displayName = 'Hotel';
