import React from 'react';
import type { IconProps } from '../../types';

export const Yen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.792 1.61-9.53 12.39h4.738a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v3a1 1 0 0 1 -2 0v-3h-5a1 1 0 0 1 0-2h5v-2h-5a1 1 0 0 1 0-2h4.738l-9.53-12.39a1 1 0 0 1 1.584-1.22l9.208 11.97 9.208-11.97a1 1 0 1 1 1.584 1.22z"/></svg>
);

Yen.displayName = 'Yen';
