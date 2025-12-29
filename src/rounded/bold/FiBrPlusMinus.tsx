import React from 'react';
import type { IconProps } from '../../types';

export const FiBrPlusMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m3,9c0-.828.672-1.5,1.5-1.5h6V1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v6h6c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5h-6v6c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-6h-6c-.828,0-1.5-.672-1.5-1.5Zm16.5,12H4.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5h15c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5Z"/></svg>
);

FiBrPlusMinus.displayName = 'FiBrPlusMinus';
