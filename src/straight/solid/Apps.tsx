import React from 'react';
import type { IconProps } from '../../types';

export const Apps: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3Z"/><path d="M21,0H13V11H24V3A3,3,0,0,0,21,0Z"/><path d="M0,21a3,3,0,0,0,3,3h8V13H0Z"/><path d="M13,24h8a3,3,0,0,0,3-3V13H13Z"/></svg>
);

Apps.displayName = 'Apps';
