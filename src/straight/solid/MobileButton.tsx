import React from 'react';
import type { IconProps } from '../../types';

export const MobileButton: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,0V21c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V0H4ZM14,21h-4v-2h4v2Z"/></svg>
);

MobileButton.displayName = 'MobileButton';
