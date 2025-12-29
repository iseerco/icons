import React from 'react';
import type { IconProps } from '../../types';

export const Sword: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m23.414.587a2.02 2.02 0 0 0 -1.941-.513l-3.715 1.218-12.24 12.24a14.58 14.58 0 0 0 -4.376-1.522l-.286 1.979a12.638 12.638 0 0 1 5.354 2.387l-3.71 3.71-1.024-1.024-1.414 1.414 3.5 3.5 1.414-1.414-1.062-1.062 3.71-3.71a12.615 12.615 0 0 1 2.386 5.354l1.98-.286a14.515 14.515 0 0 0 -1.522-4.376l12.24-12.24 1.245-3.81a1.994 1.994 0 0 0 -.539-1.845z"/></svg>
);

Sword.displayName = 'Sword';
