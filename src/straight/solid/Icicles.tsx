import React from 'react';
import type { IconProps } from '../../types';

export const Icicles: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <polygon points="0 0 24 0 24 .635 21 22 17.868 9.281 15.011 18.143 11.908 9.267 8 24 4.571 9.532 2 17 0 .635 0 0"/>
</svg>
);

Icicles.displayName = 'Icicles';
