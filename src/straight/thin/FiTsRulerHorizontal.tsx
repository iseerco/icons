import React from 'react';
import type { IconProps } from '../../types';

export const FiTsRulerHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,7H2.5c-1.379,0-2.5,1.121-2.5,2.5v7.5H24v-7.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,9h-3v-4h-1v4h-4v-4h-1v4h-4v-4h-1v4H5v-4h-1v4H1v-6.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v6.5Z"/></svg>
);

FiTsRulerHorizontal.displayName = 'FiTsRulerHorizontal';
