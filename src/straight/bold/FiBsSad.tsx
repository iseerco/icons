import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSad: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.01,9.01,0,0,0,12,3Zm5.5,12.181A9.162,9.162,0,0,0,12,13a9.162,9.162,0,0,0-5.5,2.181l1.993,2.242A6.151,6.151,0,0,1,12,16a6.151,6.151,0,0,1,3.506,1.423ZM6,9.667V11h5V9.667A2.587,2.587,0,0,0,8.5,7,2.587,2.587,0,0,0,6,9.667Zm7,0V11h5V9.667A2.587,2.587,0,0,0,15.5,7,2.587,2.587,0,0,0,13,9.667Z"/></svg>
);

FiBsSad.displayName = 'FiBsSad';
