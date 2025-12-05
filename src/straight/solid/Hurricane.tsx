import React from 'react';
import type { IconProps } from '../../types';

export const Hurricane: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,13c0,6.374-5.047,11-12,11H7V22a5.428,5.428,0,0,0,3.437-1.122C-2.719,18.034.32-.281,14,0h3V2a5.428,5.428,0,0,0-3.437,1.122A10.016,10.016,0,0,1,22,13Zm-7-1a3,3,0,0,0-6,0A3,3,0,0,0,15,12Z"/></svg>
);

Hurricane.displayName = 'Hurricane';
