import React from 'react';
import type { IconProps } from '../../types';

export const Microwave: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15,16H5V7h10v9Zm9-11v16h-3v2h-2v-2H5v2h-2v-2H0V5c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Zm-7,0H3v13h14V5Zm4,0h-2v13h2V5Z"/>
</svg>
);

Microwave.displayName = 'Microwave';
