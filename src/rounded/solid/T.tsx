import React from 'react';
import type { IconProps } from '../../types';

export const T: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3c-.553,0-1,.447-1,1s.447,1,1,1H11V23c0,.553,.447,1,1,1s1-.447,1-1V2h8c.553,0,1-.447,1-1s-.447-1-1-1Z"/></svg>
);

T.displayName = 'T';
