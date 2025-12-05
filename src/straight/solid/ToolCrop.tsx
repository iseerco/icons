import React from 'react';
import type { IconProps } from '../../types';

export const ToolCrop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,18H20V7a3,3,0,0,0-3-3H6V0H4V4H0V6H4V17a3,3,0,0,0,3,3H18v4h2V20h4ZM7,18a1,1,0,0,1-1-1V6H17a1,1,0,0,1,1,1V18Z"/></svg>
);

ToolCrop.displayName = 'ToolCrop';
