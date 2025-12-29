import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCoffin: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.146,0H7.854c-1.431,0-2.718.871-3.25,2.2l-2.669,6.673,3.361,15.127h13.406l3.361-15.127-2.669-6.673c-.531-1.329-1.819-2.2-3.25-2.2Zm.151,21H7.703l-2.639-11.873,2.451-6.127h8.969l2.451,6.127-2.639,11.873Z"/></svg>
);

FiBsCoffin.displayName = 'FiBsCoffin';
