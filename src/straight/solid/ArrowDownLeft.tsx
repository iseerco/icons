import React from 'react';
import type { IconProps } from '../../types';

export const ArrowDownLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.96,1.46L22.54,.04,2,20.59V10H0v12c0,1.1,.9,2,2,2H14v-2H3.41L23.96,1.46Z"/></svg>
);

ArrowDownLeft.displayName = 'ArrowDownLeft';
