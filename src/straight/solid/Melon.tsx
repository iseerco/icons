import React from 'react';
import type { IconProps } from '../../types';

export const Melon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24.043,10.4A13.633,13.633,0,0,1,10.4,24.04,13.6,13.6,0,0,1,.753,20.05l-.71-.71,4.829-4.831.512.513a6.816,6.816,0,0,0,9.638-9.64l-.513-.513L19.337.04l.71.709A13.56,13.56,0,0,1,24.043,10.4ZM6.8,13.6a4.808,4.808,0,0,0,6.8-6.8l-.513-.513-6.8,6.8Z"/></svg>
);

Melon.displayName = 'Melon';
