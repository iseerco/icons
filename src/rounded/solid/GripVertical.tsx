import React from 'react';
import type { IconProps } from '../../types';

export const GripVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,6h-4c-.553,0-1-.448-1-1V1c0-.552.447-1,1-1h2c1.654,0,3,1.346,3,3v2c0,.552-.447,1-1,1Zm0,9h-4c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Zm-2,9h-2c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v2c0,1.654-1.346,3-3,3ZM9,6h-4c-.553,0-1-.448-1-1v-2c0-1.654,1.346-3,3-3h2c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Zm0,9h-4c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Zm0,9h-2c-1.654,0-3-1.346-3-3v-2c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Z"/></svg>
);

GripVertical.displayName = 'GripVertical';
