import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTableLayout: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,2H5.5C2.467,2,0,4.468,0,7.5v9c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.467-5.5-5.5-5.5ZM5.5,5h13c1.207,0,2.217,.86,2.45,2H3.05c.232-1.14,1.242-2,2.45-2Zm-2.5,11.5v-6.5H7v9h-1.5c-1.378,0-2.5-1.121-2.5-2.5Zm15.5,2.5H10V10h11v6.5c0,1.379-1.122,2.5-2.5,2.5Z"/></svg>
);

FiBrTableLayout.displayName = 'FiBrTableLayout';
