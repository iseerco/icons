import React from 'react';
import type { IconProps } from '../../types';

export const WindowRestore: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,11H0c0-2.76,2.24-5,5-5H13c2.76,0,5,2.24,5,5ZM0,13v6c0,2.76,2.24,5,5,5H13c2.76,0,5-2.24,5-5v-6H0ZM19,0H11c-1.8,0-3.38,.96-4.26,2.39-.43,.7,.08,1.61,.91,1.61h5.35c3.87,0,7,3.13,7,7v6.9c2.28-.46,4-2.48,4-4.9V5c0-2.76-2.24-5-5-5Z"/></svg>
);

WindowRestore.displayName = 'WindowRestore';
