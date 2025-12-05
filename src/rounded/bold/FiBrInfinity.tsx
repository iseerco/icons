import React from 'react';
import type { IconProps } from '../../types';

export const FiBrInfinity: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18 6c-2.69 0-4.756 1.855-6 3.37-1.244-1.515-3.31-3.37-6-3.37a6 6 0 0 0 0 12c2.69 0 4.756-1.855 6-3.37 1.244 1.515 3.31 3.37 6 3.37a6 6 0 0 0 0-12zm-12 9a3 3 0 0 1 0-6c1.791 0 3.4 1.783 4.239 3-.839 1.217-2.448 3-4.239 3zm12 0c-1.791 0-3.4-1.783-4.239-3 .839-1.217 2.448-3 4.239-3a3 3 0 0 1 0 6z"/></svg>
);

FiBrInfinity.displayName = 'FiBrInfinity';
