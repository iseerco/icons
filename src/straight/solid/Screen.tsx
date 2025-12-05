import React from 'react';
import type { IconProps } from '../../types';

export const Screen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,19V6a3,3,0,0,0-3-3H3A3,3,0,0,0,0,6V19H11v1H7v2H17V20H13V19Z"/></svg>
);

Screen.displayName = 'Screen';
