import React from 'react';
import type { IconProps } from '../../types';

export const Equals: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,7v2H0v-2h24ZM0,17h24v-2H0v2Z"/>
</svg>
);

Equals.displayName = 'Equals';
