import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDeleteUser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m23.561 13.439a1.5 1.5 0 0 1 -2.122 2.122l-1.439-1.44-1.439 1.44a1.5 1.5 0 0 1 -2.122-2.122l1.44-1.439-1.44-1.439a1.5 1.5 0 0 1 2.122-2.122l1.439 1.44 1.439-1.44a1.5 1.5 0 0 1 2.122 2.122l-1.44 1.439zm-21.561-7.439a6 6 0 1 1 6 6 6.006 6.006 0 0 1 -6-6zm3 0a3 3 0 1 0 3-3 3 3 0 0 0 -3 3zm3 8a8.009 8.009 0 0 0 -8 8v.5a1.5 1.5 0 0 0 3 0v-.5a5 5 0 0 1 10 0v.5a1.5 1.5 0 0 0 3 0v-.5a8.009 8.009 0 0 0 -8-8z"/></svg>
);

FiBrDeleteUser.displayName = 'FiBrDeleteUser';
