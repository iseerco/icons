import React from 'react';
import type { IconProps } from '../../types';

export const SquarePhoneHangup: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-2,15h-4v-2.593c-1.068-.456-2.047-.68-3-.686-1.003-.006-1.978.228-3,.686v2.593h-4v-2.023c0-.768.323-1.456.827-1.96,1.308-1.308,3.733-2.006,6.173-2.017,2.39-.011,4.793.637,6.173,2.017.504.504.828,1.192.827,1.96v2.023Z"/></svg>
);

SquarePhoneHangup.displayName = 'SquarePhoneHangup';
