import React from 'react';
import type { IconProps } from '../../types';

export const Inbox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="2" y="8" width={size} height={size}/><rect x="2" y="4" width={size} height={size}/><path d="M21,24H3a3,3,0,0,1-3-3V12H8v2a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V12h8v9A3,3,0,0,1,21,24Z"/><rect x="2" y="8" width={size} height={size}/><rect x="2" y="4" width={size} height={size}/></svg>
);

Inbox.displayName = 'Inbox';
