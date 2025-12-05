import React from 'react';
import type { IconProps } from '../../types';

export const SidebarFlip: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,22H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2H13V22ZM24,7v10c0,2.757-2.243,5-5,5h-4V2h4c2.757,0,5,2.243,5,5Zm-3,8c0-.553-.448-1-1-1h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c.552,0,1-.447,1-1Zm0-4c0-.553-.448-1-1-1h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c.552,0,1-.447,1-1Zm0-4c0-.553-.448-1-1-1h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c.552,0,1-.447,1-1Z"/></svg>
);

SidebarFlip.displayName = 'SidebarFlip';
