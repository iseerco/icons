import React from 'react';
import type { IconProps } from '../../types';

export const ChartSimpleHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,9H0v6H22c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0,4H2v-2H22v2ZM18,2c0-1.1-.9-2-2-2H0V6H16c1.1,0,2-.9,2-2V2Zm-2,2H2V2h14v2Zm-6,14H0v6H10c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0,4H2v-2H10v2Z"/></svg>
);

ChartSimpleHorizontal.displayName = 'ChartSimpleHorizontal';
