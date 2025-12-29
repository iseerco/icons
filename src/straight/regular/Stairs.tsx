import React from 'react';
import type { IconProps } from '../../types';

export const Stairs: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,0v2h-6v6h-5v5h-5v5H2v6H0v-8h6v-5h5v-5h5V0h8Z"/>
</svg>
);

Stairs.displayName = 'Stairs';
