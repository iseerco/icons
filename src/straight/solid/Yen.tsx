import React from 'react';
import type { IconProps } from '../../types';

export const Yen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.792 1.61-1.584-1.22-9.208 11.97-9.208-11.97-1.584 1.22 9.53 12.39h-5.738v2h6v2h-6v2h6v4h2v-4h6v-2h-6v-2h6v-2h-5.738z"/></svg>
);

Yen.displayName = 'Yen';
