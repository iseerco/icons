import React from 'react';
import type { IconProps } from '../../types';

export const ArrowTrendDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,9v5.586L13,5.586l-6,6L1.444,6.03,.03,7.444l6.97,6.97,6-6,7.586,7.586h-5.586v2h7c1.103,0,2-.897,2-2v-7h-2Z"/></svg>
);

ArrowTrendDown.displayName = 'ArrowTrendDown';
