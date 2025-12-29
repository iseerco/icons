import React from 'react';
import type { IconProps } from '../../types';

export const TrainSide: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10,2H0V4H3V7H0V9H19.732a11.927,11.927,0,0,1,2.227,6H0v2H24V16A14.015,14.015,0,0,0,10,2Zm7.914,5H10V4A11.939,11.939,0,0,1,17.914,7ZM5,4H8V7H5ZM0,20H24v2H0Z"/></svg>
);

TrainSide.displayName = 'TrainSide';
