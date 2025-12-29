import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBatteryEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,8h-2v-.5c0-1.93-1.57-3.5-3.5-3.5H0V20H18.5c1.93,0,3.5-1.57,3.5-3.5v-.5h2V8Zm-5,8.5c0,.276-.225,.5-.5,.5H3V7h15.5c.275,0,.5,.224,.5,.5v9Z"/></svg>
);

FiBsBatteryEmpty.displayName = 'FiBsBatteryEmpty';
