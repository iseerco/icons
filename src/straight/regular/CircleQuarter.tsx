import React from 'react';
import type { IconProps } from '../../types';

export const CircleQuarter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,13H0v-1C0,5.38,5.38,0,12,0h1V13ZM2.05,11H11V2.05C6.28,2.52,2.52,6.28,2.05,11Z"/></svg>
);

CircleQuarter.displayName = 'CircleQuarter';
