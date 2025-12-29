import React from 'react';
import type { IconProps } from '../../types';

export const SearchAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m11 17.5a6.5 6.5 0 0 1 11-4.684v-12.816h-17a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h12.5a6.5 6.5 0 0 1 -6.5-6.5zm-4-12.5h10v2h-10zm15.543 18.957-2.657-2.657a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.657 2.657z"/></svg>
);

SearchAlt.displayName = 'SearchAlt';
