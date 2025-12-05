import React from 'react';
import type { IconProps } from '../../types';

export const GraphicTablet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="7 20 7 4 2 4 2 11 0 11 0 13 2 13 2 20 7 20"/><path d="M21,4H9V20H21a3,3,0,0,0,3-3V7A3,3,0,0,0,21,4Z"/></svg>
);

GraphicTablet.displayName = 'GraphicTablet';
