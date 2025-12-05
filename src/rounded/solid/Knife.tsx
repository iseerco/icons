import React from 'react';
import type { IconProps } from '../../types';

export const Knife: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2.145c.081,4.1-3.874,14.64-17.087,15.93l-5.178,5.6A1,1,0,0,1,.266,22.321L20.234.714A2.165,2.165,0,0,1,24,2.145Z"/></svg>
);

Knife.displayName = 'Knife';
