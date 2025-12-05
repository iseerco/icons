import React from 'react';
import type { IconProps } from '../../types';

export const SortAmountUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,22v2H10v-2h14Zm-3-5H10v2h11v-2Zm-3-5H10v2h8v-2Zm-3-5h-5v2h5v-2ZM3.586,.586L.086,4.086l1.414,1.414,2.5-2.5V24h2V3l2.5,2.5,1.414-1.414L6.414,.586C5.635-.193,4.365-.193,3.586,.586Z"/></svg>
);

SortAmountUp.displayName = 'SortAmountUp';
