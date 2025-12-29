import React from 'react';
import type { IconProps } from '../../types';

export const SidebarFlip: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,22H0V5c0-1.654,1.346-3,3-3H13V22ZM24,5V22H15V2h6c1.654,0,3,1.346,3,3Zm-3,9h-3v2h3v-2Zm0-4h-3v2h3v-2Zm0-4h-3v2h3v-2Z"/></svg>
);

SidebarFlip.displayName = 'SidebarFlip';
