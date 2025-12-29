import React from 'react';
import type { IconProps } from '../../types';

export const Wifi2: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10,19c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Zm8.36-6.36c-3.51-3.51-9.22-3.51-12.73,0l1.41,1.41c2.73-2.73,7.17-2.73,9.9,0l1.41-1.41Z"/></svg>
);

Wifi2.displayName = 'Wifi2';
