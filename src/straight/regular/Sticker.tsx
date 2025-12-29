import React from 'react';
import type { IconProps } from '../../types';

export const Sticker: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 0a12 12 0 0 0 0 24h.414l11.586-11.586v-.414a12.013 12.013 0 0 0 -12-12zm-10 12a9.994 9.994 0 0 1 19.79-1.989 12 12 0 0 0 -11.779 11.779 10.008 10.008 0 0 1 -8.011-9.79zm10.022 9.564a10 10 0 0 1 9.541-9.542z"/></svg>
);

Sticker.displayName = 'Sticker';
