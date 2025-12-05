import React from 'react';
import type { IconProps } from '../../types';

export const Nfc: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm0,21H3V3h5.41l-3.41,3.41v12.59h14V5h-6.09l-2.91,2.91v6.09h4v-5h2v7H8V7.09L12.09,3h8.91V21Z"/></svg>
);

Nfc.displayName = 'Nfc';
