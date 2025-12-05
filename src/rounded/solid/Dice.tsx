import React from 'react';
import type { IconProps } from '../../types';

export const Dice: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 0h-14a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm-12 18a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);

Dice.displayName = 'Dice';
