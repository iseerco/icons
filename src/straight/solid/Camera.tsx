import React from 'react';
import type { IconProps } from '../../types';

export const Camera: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><circle cx="12" cy="15" r="4"/><path d="M21,5H3A3,3,0,0,0,0,8V24H24V8A3,3,0,0,0,21,5ZM12,21a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,21Z"/><polygon points="17.72 3 15.406 0 8.593 0 6.28 3 17.72 3"/></svg>
);

Camera.displayName = 'Camera';
