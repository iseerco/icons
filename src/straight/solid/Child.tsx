import React from 'react';
import type { IconProps } from '../../types';

export const Child: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m9.5,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm6.5,12.5h-1v5h-2v-5h-2v5h-2v-5h-1v-6c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3v6Z"/>
</svg>
);

Child.displayName = 'Child';
