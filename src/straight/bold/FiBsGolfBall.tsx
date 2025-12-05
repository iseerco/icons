import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGolfBall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,12.5A1.5,1.5,0,1,1,12.5,11,1.5,1.5,0,0,1,14,12.5Zm-1-4A1.5,1.5,0,1,0,11.5,10,1.5,1.5,0,0,0,13,8.5Zm1,1A1.5,1.5,0,1,0,15.5,8,1.5,1.5,0,0,0,14,9.5Zm2,7.561v.11a2.981,2.981,0,0,1-.878,2.121L13.5,20.914V24h-3V20.914L8.879,19.293A2.982,2.982,0,0,1,8,17.171V17.06a9,9,0,1,1,8,0ZM18,9a6,6,0,1,0-6,6A6.006,6.006,0,0,0,18,9Z"/></svg>
);

FiBsGolfBall.displayName = 'FiBsGolfBall';
