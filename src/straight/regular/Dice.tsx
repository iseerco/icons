import React from 'react';
import type { IconProps } from '../../types';

export const Dice: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 24h-24v-21a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-22-2h20v-19a1 1 0 0 0 -1-1h-18a1 1 0 0 0 -1 1zm9-10a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-5-5a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-10 10a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z"/></svg>
);

Dice.displayName = 'Dice';
