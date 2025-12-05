import React from 'react';
import type { IconProps } from '../../types';

export const AngleCircleDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm1.414,13.414L18.126,10.7,16.712,9.289,12,14,7.327,9.327,5.913,10.741l4.673,4.673a2,2,0,0,0,2.828,0Z"/></svg>
);

AngleCircleDown.displayName = 'AngleCircleDown';
