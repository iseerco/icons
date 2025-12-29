import React from 'react';
import type { IconProps } from '../../types';

export const BatteryQuarter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="4" y="8" width={size} height={size}/><path d="M22,8v-1c0-1.654-1.346-3-3-3H0V20H19c1.654,0,3-1.346,3-3v-1h2V8h-2Zm-13-1v11H2V6h7v1Z"/></svg>
);

BatteryQuarter.displayName = 'BatteryQuarter';
