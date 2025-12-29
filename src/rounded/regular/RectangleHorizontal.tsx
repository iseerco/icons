import React from 'react';
import type { IconProps } from '../../types';

export const RectangleHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,3H5A5,5,0,0,0,0,8v8a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V8A5,5,0,0,0,19,3Zm3,13a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V8A3,3,0,0,1,5,5H19a3,3,0,0,1,3,3Z"/></svg>
);

RectangleHorizontal.displayName = 'RectangleHorizontal';
