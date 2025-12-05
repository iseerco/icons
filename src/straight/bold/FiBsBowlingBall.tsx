import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBowlingBall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.01,9.01,0,0,0,12,3Zm-2,8.5A1.5,1.5,0,1,0,11.5,10,1.5,1.5,0,0,0,10,11.5ZM6.5,9A1.5,1.5,0,1,0,8,10.5,1.5,1.5,0,0,0,6.5,9Zm3-4A1.5,1.5,0,1,0,11,6.5,1.5,1.5,0,0,0,9.5,5Z"/></svg>
);

FiBsBowlingBall.displayName = 'FiBsBowlingBall';
