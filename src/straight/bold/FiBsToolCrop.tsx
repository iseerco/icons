import React from 'react';
import type { IconProps } from '../../types';

export const FiBsToolCrop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,17H20V6.5A2.5,2.5,0,0,0,17.5,4H7V0H4V4H0V7H4V17.5A2.5,2.5,0,0,0,6.5,20H17v4h3V20h4ZM7,17V7H17V17Z"/></svg>
);

FiBsToolCrop.displayName = 'FiBsToolCrop';
