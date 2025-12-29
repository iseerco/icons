import React from 'react';
import type { IconProps } from '../../types';

export const FiBrChartSimpleHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12c0,1.65-1.35,3-3,3H3c-1.65,0-3-1.35-3-3s1.35-3,3-3H21c1.65,0,3,1.35,3,3ZM3,6H15c1.65,0,3-1.35,3-3s-1.35-3-3-3H3C1.35,0,0,1.35,0,3s1.35,3,3,3Zm6,12H3c-1.65,0-3,1.35-3,3s1.35,3,3,3h6c1.65,0,3-1.35,3-3s-1.35-3-3-3Z"/></svg>
);

FiBrChartSimpleHorizontal.displayName = 'FiBrChartSimpleHorizontal';
