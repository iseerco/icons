import React from 'react';
import type { IconProps } from '../../types';

export const Nine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24H6v-2h6c3.309,0,6-2.691,6-6v-2.714c-1.467,1.663-3.613,2.714-6,2.714-4.411,0-8-3.589-8-8S7.589,0,12,0s8,3.589,8,8v8c0,4.411-3.589,8-8,8Zm0-22c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Z"/></svg>
);

Nine.displayName = 'Nine';
