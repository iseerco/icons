import React from 'react';
import type { IconProps } from '../../types';

export const GridDividers: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2H0V0H24V2Zm0,10H0v2H24v-2ZM6,4H0v6H6V4Zm9,0h-6v6h6V4Zm9,0h-6v6h6V4ZM6,16H0v6H6v-6Zm9,0h-6v6h6v-6Zm9,0h-6v6h6v-6Z"/></svg>
);

GridDividers.displayName = 'GridDividers';
