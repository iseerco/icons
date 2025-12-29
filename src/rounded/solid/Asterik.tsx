import React from 'react';
import type { IconProps } from '../../types';

export const Asterik: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21.5 14.119-3.483-2.119 3.483-2.119a3.181 3.181 0 1 0 -3.362-5.4l-3.138 2.009v-3.49a3 3 0 0 0 -6 0v3.588l-3.138-2.107a3.181 3.181 0 0 0 -3.362 5.4l3.483 2.119-3.483 2.119a3.181 3.181 0 0 0 3.362 5.4l3.138-2.038v3.519a3 3 0 0 0 6 0v-3.58l3.138 2.1a3.181 3.181 0 0 0 3.362-5.4z"/></svg>
);

Asterik.displayName = 'Asterik';
