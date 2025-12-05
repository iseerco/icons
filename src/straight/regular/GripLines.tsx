import React from 'react';
import type { IconProps } from '../../types';

export const GripLines: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,8v2H0v-2h24ZM0,16h24v-2H0v2Z"/></svg>
);

GripLines.displayName = 'GripLines';
