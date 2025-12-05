import React from 'react';
import type { IconProps } from '../../types';

export const SortAmountDownAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6,21V0h-2V21l-2.5-2.5L.086,19.914l3.499,3.499c.377,.378,.879,.587,1.413,.587h.002c.534,0,1.036-.208,1.414-.586l3.5-3.5-1.414-1.414-2.5,2.5ZM10,0V2h14V0H10Zm0,7h11v-2H10v2Zm0,5h8v-2H10v2Zm0,5h5v-2h-5v2Z"/></svg>
);

SortAmountDownAlt.displayName = 'SortAmountDownAlt';
