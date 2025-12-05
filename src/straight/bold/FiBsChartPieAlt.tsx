import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartPieAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.513,3.5,12.5,2H11A11,11,0,0,0,8.9,23.8a11.1,11.1,0,0,0,2.078.2A11.041,11.041,0,0,0,22,13V11.5H12.5Zm6.343,11A7.985,7.985,0,1,1,9.511,5.143L9.5,14.5Z"/><path d="M14.5.005V9.5H24A9.542,9.542,0,0,0,14.5.005Z"/></svg>
);

FiBsChartPieAlt.displayName = 'FiBsChartPieAlt';
