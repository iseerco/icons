import React from 'react';
import type { IconProps } from '../../types';

export const Pallet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <polygon points="0 17 0 22 2 22 2 19 11 19 11 22 13 22 13 19 22 19 22 22 24 22 24 17 0 17"/>
</svg>
);

Pallet.displayName = 'Pallet';
