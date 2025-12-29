import React from 'react';
import type { IconProps } from '../../types';

export const BatteryEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,8h-1.101c-.465-2.279-2.485-4-4.899-4H5C2.243,4,0,6.243,0,9v6c0,2.757,2.243,5,5,5h12c2.414,0,4.435-1.721,4.899-4h1.101c.552,0,1-.448,1-1v-6c0-.552-.448-1-1-1Z"/></svg>
);

BatteryEmpty.displayName = 'BatteryEmpty';
