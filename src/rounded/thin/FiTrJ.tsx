import React from 'react';
import type { IconProps } from '../../types';

export const FiTrJ: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5v-1c-.01-.649,1.01-.649,1,0v1c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V.5c-.01-.649,1.01-.649,1,0V19.5c0,2.481-2.019,4.5-4.5,4.5Z"/></svg>
);

FiTrJ.displayName = 'FiTrJ';
