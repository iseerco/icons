import React from 'react';
import type { IconProps } from '../../types';

export const RectanglePanoramic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,5H5a5,5,0,0,0-5,5v4a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V10A5,5,0,0,0,19,5Zm3,9a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V10A3,3,0,0,1,5,7H19a3,3,0,0,1,3,3Z"/></svg>
);

RectanglePanoramic.displayName = 'RectanglePanoramic';
