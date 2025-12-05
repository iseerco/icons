import React from 'react';
import type { IconProps } from '../../types';

export const FiBrToolMarquee: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18.5 24a1.5 1.5 0 0 1 0-3 2.5 2.5 0 0 0 2.5-2.5 1.5 1.5 0 0 1 3 0 5.506 5.506 0 0 1 -5.5 5.5zm5.5-18.5a5.506 5.506 0 0 0 -5.5-5.5 1.5 1.5 0 0 0 0 3 2.5 2.5 0 0 1 2.5 2.5 1.5 1.5 0 0 0 3 0zm0 8v-3a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0zm-17 9a1.5 1.5 0 0 0 -1.5-1.5 2.5 2.5 0 0 1 -2.5-2.5 1.5 1.5 0 0 0 -3 0 5.506 5.506 0 0 0 5.5 5.5 1.5 1.5 0 0 0 1.5-1.5zm-4-17a2.5 2.5 0 0 1 2.5-2.5 1.5 1.5 0 0 0 0-3 5.506 5.506 0 0 0 -5.5 5.5 1.5 1.5 0 0 0 3 0zm0 8v-3a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0zm12-12a1.5 1.5 0 0 0 -1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5zm0 21a1.5 1.5 0 0 0 -1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5z"/></svg>
);

FiBrToolMarquee.displayName = 'FiBrToolMarquee';
