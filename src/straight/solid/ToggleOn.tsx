import React from 'react';
import type { IconProps } from '../../types';

export const ToggleOn: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16,4h-8C3.589,4,0,7.589,0,12s3.589,8,8,8h8c4.411,0,8-3.589,8-8s-3.589-8-8-8Zm0,13c-2.757,0-5-2.242-5-5s2.243-5,5-5,5,2.242,5,5-2.243,5-5,5Z"/></svg>
);

ToggleOn.displayName = 'ToggleOn';
