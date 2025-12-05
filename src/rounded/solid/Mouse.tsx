import React from 'react';
import type { IconProps } from '../../types';

export const Mouse: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,3V1a1,1,0,0,0-2,0V3a7.008,7.008,0,0,0-7,7v6a8,8,0,0,0,16,0V10A7.008,7.008,0,0,0,13,3Zm0,7a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z"/></svg>
);

Mouse.displayName = 'Mouse';
