import React from 'react';
import type { IconProps } from '../../types';

export const PersonSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,14.5h-2v7h-2v-7h-2v7h-2v-7h-2V9c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v8Z"/></svg>
);

PersonSimple.displayName = 'PersonSimple';
