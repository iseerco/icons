import React from 'react';
import type { IconProps } from '../../types';

export const BowlingBall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM11,10a1,1,0,1,1-1-1A1,1,0,0,1,11,10ZM7,10A1,1,0,1,1,6,9,1,1,0,0,1,7,10ZM9,7A1,1,0,1,1,8,6,1,1,0,0,1,9,7Z"/></svg>
);

BowlingBall.displayName = 'BowlingBall';
