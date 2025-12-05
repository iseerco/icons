import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTombstoneAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22,21v-11C22,4.486,17.514,0,12,0S2,4.486,2,10v11H0v3h24v-3h-2ZM5,10c0-3.859,3.14-7,7-7s7,3.141,7,7v11H5v-11Z"/></svg>
);

FiBsTombstoneAlt.displayName = 'FiBsTombstoneAlt';
