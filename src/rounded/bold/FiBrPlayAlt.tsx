import React from 'react';
import type { IconProps } from '../../types';

export const FiBrPlayAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18.5 24h-13a5.506 5.506 0 0 1 -5.5-5.5v-13a5.506 5.506 0 0 1 5.5-5.5h13a5.506 5.506 0 0 1 5.5 5.5v13a5.506 5.506 0 0 1 -5.5 5.5zm-13-21a2.5 2.5 0 0 0 -2.5 2.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13a2.5 2.5 0 0 0 -2.5-2.5zm2.492 6.339v5.322a1.337 1.337 0 0 0 2 1.161l5.327-2.661a1.337 1.337 0 0 0 0-2.322l-5.327-2.661a1.337 1.337 0 0 0 -2 1.161z"/></svg>
);

FiBrPlayAlt.displayName = 'FiBrPlayAlt';
