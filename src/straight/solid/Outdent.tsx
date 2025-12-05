import React from 'react';
import type { IconProps } from '../../types';

export const Outdent: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m.83,13.228c-.443-.397-.443-1.092,0-1.489l4.17-3.739v8.967L.83,13.228ZM0,4v2h24v-2H0Zm0,17h24v-2H0v2Zm8-10h16v-2H8v2Zm0,5h16v-2H8v2Z"/></svg>
);

Outdent.displayName = 'Outdent';
