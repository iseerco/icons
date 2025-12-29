import React from 'react';
import type { IconProps } from '../../types';

export const GraphicTablet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,4H9V20H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4Z"/><path d="M2,9v2H1a1,1,0,0,0,0,2H2v2a5.006,5.006,0,0,0,5,5V4A5.006,5.006,0,0,0,2,9Z"/></svg>
);

GraphicTablet.displayName = 'GraphicTablet';
