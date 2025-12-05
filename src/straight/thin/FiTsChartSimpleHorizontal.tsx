import React from 'react';
import type { IconProps } from '../../types';

export const FiTsChartSimpleHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,9H0v6H22c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm1,4c0,.55-.45,1-1,1H1v-4H22c.55,0,1,.45,1,1v2Zm-5-9V2c0-1.1-.9-2-2-2H0V6H16c1.1,0,2-.9,2-2ZM1,1h15c.55,0,1,.45,1,1v2c0,.55-.45,1-1,1H1V1ZM10,18H0v6H10c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm1,4c0,.55-.45,1-1,1H1v-4H10c.55,0,1,.45,1,1v2Z"/></svg>
);

FiTsChartSimpleHorizontal.displayName = 'FiTsChartSimpleHorizontal';
