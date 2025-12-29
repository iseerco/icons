import React from 'react';
import type { IconProps } from '../../types';

export const WindowMaximize: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,8V4C0,2.35,1.35,1,3,1H21c1.65,0,3,1.35,3,3v4H0Zm0,2v13H24V10H0Z"/></svg>
);

WindowMaximize.displayName = 'WindowMaximize';
