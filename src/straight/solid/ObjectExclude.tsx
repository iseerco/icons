import React from 'react';
import type { IconProps } from '../../types';

export const ObjectExclude: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,11v5H0V3C0,1.35,1.35,0,3,0H13c1.65,0,3,1.35,3,3v5h-5c-1.65,0-3,1.35-3,3Zm13-3h-5v8H8v8H24V11c0-1.65-1.35-3-3-3Z"/></svg>
);

ObjectExclude.displayName = 'ObjectExclude';
