import React from 'react';
import type { IconProps } from '../../types';

export const Overline: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-4.411,0-8-3.589-8-8v-4c0-4.411,3.589-8,8-8s8,3.589,8,8v4c0,4.411-3.589,8-8,8Zm0-18c-3.309,0-6,2.691-6,6v4c0,3.309,2.691,6,6,6s6-2.691,6-6v-4c0-3.309-2.691-6-6-6ZM22,0H2V2H22V0Z"/></svg>
);

Overline.displayName = 'Overline';
