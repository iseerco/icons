import React from 'react';
import type { IconProps } from '../../types';

export const UpRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7.84,23.23L.77,16.16,10.96,5.97,6.02,.99h13.98s0,0,0,0c.8,0,1.55,.31,2.12,.88,.57,.57,.88,1.32,.88,2.13v13.96s-4.97-4.92-4.97-4.92L7.84,23.23Z"/></svg>
);

UpRight.displayName = 'UpRight';
