import React from 'react';
import type { IconProps } from '../../types';

export const PersonDress: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm9.762,12.174l-3.238-3.549,1.11,8.874h-2.133v4h-2v-4h-2v4h-2v-4h-2.133l1.11-8.874-3.238,3.549-1.477-1.349,5.88-6.427c.547-.552,1.297-.899,2.124-.899h1.469c.827,0,1.576,.346,2.124,.899l5.88,6.427-1.477,1.349Z"/></svg>
);

PersonDress.displayName = 'PersonDress';
