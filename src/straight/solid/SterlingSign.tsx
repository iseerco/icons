import React from 'react';
import type { IconProps } from '../../types';

export const SterlingSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,22v2H2v-2c1.65,0,3-1.35,3-3v-5H2v-2h3v-4C5,3.59,8.59,0,13,0s7.55,3.14,7.69,3.28l-1.38,1.45s-2.91-2.72-6.31-2.72-6,2.69-6,6v4h11v2H7v5c0,1.12-.37,2.16-1,3H22Z"/></svg>
);

SterlingSign.displayName = 'SterlingSign';
