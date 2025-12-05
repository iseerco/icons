import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTablePicnic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12h-3.808l-2.538-6h3.346V3H3v3h3.346l-2.538,6H0v3H2.538L0,21H3l2.538-6h12.923l2.538,6h3l-2.538-6h2.538v-3Zm-17.192,0l2.539-6h5.308l2.539,6H6.808Z"/></svg>
);

FiBsTablePicnic.displayName = 'FiBsTablePicnic';
