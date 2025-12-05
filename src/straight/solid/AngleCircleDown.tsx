import React from 'react';
import type { IconProps } from '../../types';

export const AngleCircleDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm1.414,15.414a2,2,0,0,1-2.828,0L5.913,10.741,7.327,9.327,12,14l4.712-4.711L18.126,10.7Z"/></svg>
);

AngleCircleDown.displayName = 'AngleCircleDown';
