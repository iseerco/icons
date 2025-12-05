import React from 'react';
import type { IconProps } from '../../types';

export const Pause: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="3" width={size} height={size}/><rect x="14" width={size} height={size}/></svg>
);

Pause.displayName = 'Pause';
