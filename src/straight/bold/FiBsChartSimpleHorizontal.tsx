import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartSimpleHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,6H0V0H16c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm6,3H0v6H22c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-12,9H0v6H10c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Z"/></svg>
);

FiBsChartSimpleHorizontal.displayName = 'FiBsChartSimpleHorizontal';
