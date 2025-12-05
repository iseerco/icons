import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartTree: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,18.4V16.5A3.5,3.5,0,0,0,19,13H13.5V10.792a5.5,5.5,0,1,0-3,0V13H5a3.5,3.5,0,0,0-3.5,3.5v1.9a3,3,0,1,0,3,0V16.5A.5.5,0,0,1,5,16h5.5v2.4a3,3,0,1,0,3,0V16H19a.5.5,0,0,1,.5.5v1.9a3,3,0,1,0,3,0ZM9.5,5.5A2.5,2.5,0,1,1,12,8,2.5,2.5,0,0,1,9.5,5.5Z"/></svg>
);

FiBsChartTree.displayName = 'FiBsChartTree';
