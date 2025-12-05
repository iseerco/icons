import React from 'react';
import type { IconProps } from '../../types';

export const SquareSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,19H5V8c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3v11Zm-12-2h10V8c0-.55-.45-1-1-1H8c-.55,0-1,.45-1,1v9Z"/></svg>
);

SquareSmall.displayName = 'SquareSmall';
