import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTimeForward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.559 11a1.487 1.487 0 0 0 -1.569 1.43 9.027 9.027 0 1 1 -3.154-7.266l-1.129 1.129a1 1 0 0 0 .707 1.707h4.586a1 1 0 0 0 1-1v-4.586a1 1 0 0 0 -1.707-.707l-1.335 1.335a11.984 11.984 0 1 0 4.028 9.528 1.5 1.5 0 0 0 -1.427-1.57z"/><path d="m11.5 7a1.5 1.5 0 0 0 -1.5 1.5v4.293a2 2 0 0 0 .586 1.414l1.793 1.793a1.5 1.5 0 0 0 2.121-2.121l-1.5-1.5v-3.879a1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
);

FiBrTimeForward.displayName = 'FiBrTimeForward';
