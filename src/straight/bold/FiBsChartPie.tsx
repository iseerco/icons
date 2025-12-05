import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartPie: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm3.621,13.5h5.244a8.947,8.947,0,0,1-1.537,3.706Zm5.244-3H13.5V3.135A9.014,9.014,0,0,1,20.865,10.5ZM3,12a9.009,9.009,0,0,1,7.5-8.865v9.486l6.706,6.707A8.986,8.986,0,0,1,3,12Z"/></svg>
);

FiBsChartPie.displayName = 'FiBsChartPie';
