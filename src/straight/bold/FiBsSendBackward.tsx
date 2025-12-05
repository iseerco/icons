import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSendBackward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,8h-9c-1.93,0-3.5,1.57-3.5,3.5v12.5h16v-12.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,13h-10v-9.5c0-.275.224-.5.5-.5h9c.276,0,.5.225.5.5v9.5ZM3,13h3v3H0V3.5C0,1.57,1.57,0,3.5,0h9c1.93,0,3.5,1.57,3.5,3.5v2.5h-3v-2.5c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v9.5Z"/></svg>
);

FiBsSendBackward.displayName = 'FiBsSendBackward';
