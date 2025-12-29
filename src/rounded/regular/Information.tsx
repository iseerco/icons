import React from 'react';
import type { IconProps } from '../../types';

export const Information: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m11,1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm6,20.5h-3v-12c0-2.757-2.243-5-5-5-.552,0-1,.448-1,1s.448,1,1,1c1.654,0,3,1.346,3,3v12h-3c-.552,0-1,.447-1,1s.448,1,1,1h8c.552,0,1-.447,1-1s-.448-1-1-1Z"/></svg>
);

Information.displayName = 'Information';
