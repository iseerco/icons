import React from 'react';
import type { IconProps } from '../../types';

export const AngleSquareRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM15.415,10.712a2,2,0,0,1,0,2.828l-4.673,4.673L9.328,16.8,14,12.126,9.29,7.414,10.7,6Z"/></svg>
);

AngleSquareRight.displayName = 'AngleSquareRight';
