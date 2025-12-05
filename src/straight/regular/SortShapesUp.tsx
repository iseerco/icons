import React from 'react';
import type { IconProps } from '../../types';

export const SortShapesUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7.41,.59l4.5,4.5-1.41,1.41-3.5-3.5V24h-2V3L1.5,6.5,.09,5.09,4.59,.59c.78-.78,2.05-.78,2.83,0Zm6.59,13.41h9v9H14V14Zm2,7h5v-5h-5v5Zm7.99-10H13L18.52,.98l5.47,10.02Zm-7.61-2h4.24l-2.11-3.86-2.13,3.86Z"/></svg>
);

SortShapesUp.displayName = 'SortShapesUp';
