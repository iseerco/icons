import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowToBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.735,21.015h-3l4.069-4.068a1.5,1.5,0,0,0-2.121-2.121L13.5,18.01V1.515a1.5,1.5,0,0,0-3,0v16.5L7.315,14.826a1.5,1.5,0,0,0-2.121,2.121l4.068,4.068h-3a1.5,1.5,0,0,0,0,3h11.47a1.5,1.5,0,0,0,0-3Z"/></svg>
);

FiBrArrowToBottom.displayName = 'FiBrArrowToBottom';
