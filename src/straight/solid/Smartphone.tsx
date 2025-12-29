import React from 'react';
import type { IconProps } from '../../types';

export const Smartphone: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="4" width={size} height={size}/><path d="M4,18v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V18Zm9,4H11V20h2Z"/></svg>
);

Smartphone.displayName = 'Smartphone';
