import React from 'react';
import type { IconProps } from '../../types';

export const D: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,24H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h4c6.065,0,11,4.935,11,11v2c0,6.065-4.935,11-11,11ZM7,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h4c4.963,0,9-4.038,9-9v-2c0-4.962-4.037-9-9-9H7Z"/></svg>
);

D.displayName = 'D';
