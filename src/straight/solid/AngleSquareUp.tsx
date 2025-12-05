import React from 'react';
import type { IconProps } from '../../types';

export const AngleSquareUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM10.605,8.585a2,2,0,0,1,2.829,0l4.672,4.673-1.414,1.414L12.02,10,7.308,14.71,5.894,13.3Z"/></svg>
);

AngleSquareUp.displayName = 'AngleSquareUp';
