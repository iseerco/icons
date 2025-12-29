import React from 'react';
import type { IconProps } from '../../types';

export const FiBrYen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.408.306a1.5 1.5 0 0 0 -2.1.286l-8.308 10.929-8.306-10.929a1.5 1.5 0 0 0 -2.388 1.816l8.05 10.592h-2.856a1.5 1.5 0 0 0 0 3h4v2h-4a1.5 1.5 0 0 0 0 3h4v1.5a1.5 1.5 0 0 0 3 0v-1.5h4a1.5 1.5 0 0 0 0-3h-4v-2h4a1.5 1.5 0 0 0 0-3h-2.856l8.05-10.592a1.5 1.5 0 0 0 -.286-2.102z"/></svg>
);

FiBrYen.displayName = 'FiBrYen';
