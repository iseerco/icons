import React from 'react';
import type { IconProps } from '../../types';

export const FiBsZ: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24H4.842c-1.153,0-2.183-.688-2.624-1.753s-.199-2.279,.616-3.094L18.773,3H2V0H19.158c1.153,0,2.183,.688,2.624,1.753s.199,2.279-.616,3.094L5.227,21H22v3Zm-17.037-2.733h0ZM19.037,2.732h0Z"/></svg>
);

FiBsZ.displayName = 'FiBsZ';
