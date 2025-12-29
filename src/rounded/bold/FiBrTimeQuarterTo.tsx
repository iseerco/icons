import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTimeQuarterTo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 12a12 12 0 0 1 -24 0 1.5 1.5 0 0 1 3 0 9 9 0 1 0 9-9 1.5 1.5 0 0 1 0-3 12.013 12.013 0 0 1 12 12zm-17 0a1.5 1.5 0 0 0 1.5 1.5h2.19a1.991 1.991 0 0 0 2.81-2.81v-4.19a1.5 1.5 0 0 0 -3 0v4h-2a1.5 1.5 0 0 0 -1.5 1.5zm-.26-7.106a1.5 1.5 0 1 0 -1.5-1.5 1.5 1.5 0 0 0 1.5 1.5zm-3.827 3.856a1.5 1.5 0 1 0 -1.5-1.5 1.5 1.5 0 0 0 1.5 1.5z"/></svg>
);

FiBrTimeQuarterTo.displayName = 'FiBrTimeQuarterTo';
