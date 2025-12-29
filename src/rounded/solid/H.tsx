import React from 'react';
import type { IconProps } from '../../types';

export const H: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0c-.553,0-1,.448-1,1V11H4V1c0-.552-.448-1-1-1s-1,.448-1,1V23c0,.552,.448,1,1,1s1-.448,1-1V13H20v10c0,.552,.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Z"/></svg>
);

H.displayName = 'H';
