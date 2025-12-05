import React from 'react';
import type { IconProps } from '../../types';

export const Unlock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,8V7a5,5,0,0,1,9.375-2.422l1.749-.971A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8Zm6,10H11V14h2Z"/></svg>
);

Unlock.displayName = 'Unlock';
