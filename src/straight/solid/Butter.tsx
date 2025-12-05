import React from 'react';
import type { IconProps } from '../../types';

export const Butter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m17,15H1V5c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v10Zm3-13h-2.003c.629.836,1.003,1.875,1.003,3v10h4V5c0-1.654-1.346-3-3-3ZM0,17v2h1c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3h1v-2H0Z"/>
</svg>
);

Butter.displayName = 'Butter';
