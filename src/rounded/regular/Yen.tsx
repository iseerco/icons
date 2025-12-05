import React from 'react';
import type { IconProps } from '../../types';

export const Yen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.61.208a1 1 0 0 0 -1.4.182l-9.21 11.97-9.208-11.97a1 1 0 0 0 -1.584 1.22l9.53 12.39h-4.738a1 1 0 0 0 0 2h5v2h-5a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h5a1 1 0 0 0 0-2h-5v-2h5a1 1 0 0 0 0-2h-4.738l9.53-12.39a1 1 0 0 0 -.182-1.402z"/></svg>
);

Yen.displayName = 'Yen';
