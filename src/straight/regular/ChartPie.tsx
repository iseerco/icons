import React from 'react';
import type { IconProps } from '../../types';

export const ChartPie: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm9.949,11H13V2.051A10.015,10.015,0,0,1,21.949,11ZM2,12a10.013,10.013,0,0,1,9-9.949V12.414l7.324,7.324A9.992,9.992,0,0,1,2,12Zm17.738,6.324L14.414,13h7.535A9.942,9.942,0,0,1,19.738,18.324Z"/></svg>
);

ChartPie.displayName = 'ChartPie';
