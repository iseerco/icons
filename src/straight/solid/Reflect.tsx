import React from 'react';
import type { IconProps } from '../../types';

export const Reflect: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 13h-24v-2h24zm-15.114-12.573-.1-.068a2.5 2.5 0 0 0 -3.786 2.141v6.5h14.916zm-.1 23.214 11.13-8.641h-14.916v6.5a2.494 2.494 0 0 0 3.787 2.143z"/></svg>
);

Reflect.displayName = 'Reflect';
