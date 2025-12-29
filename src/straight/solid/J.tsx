import React from 'react';
import type { IconProps } from '../../types';

export const J: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,24H5c-1.654,0-3-1.346-3-3v-4.111h2v4.111c0,.551,.448,1,1,1h14c.552,0,1-.449,1-1V0h2V21c0,1.654-1.346,3-3,3Z"/></svg>
);

J.displayName = 'J';
