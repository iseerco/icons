import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNotEqual: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15.011,9l-2.727,6h11.716v3h-13.08l-2.714,5.971-2.73-1.242,2.149-4.729H0v-3h8.989l2.727-6H0v-3h13.08L15.794.029l2.73,1.242-2.149,4.729h7.625v3h-8.989Z"/>
</svg>
);

FiBsNotEqual.displayName = 'FiBsNotEqual';
