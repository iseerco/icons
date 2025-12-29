import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBrokenImage: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.38,0H5c-1.65,0-3,1.35-3,3V24H22V5.66L16.38,0Zm-2.38,3v5h5v5.36l-2.98-2.98-4,4-4-4-3.02,3.02V3H14ZM5,21v-3.36l3.02-3.02,4,4,4-4,2.98,2.98v3.4H5Z"/></svg>
);

FiBsBrokenImage.displayName = 'FiBsBrokenImage';
