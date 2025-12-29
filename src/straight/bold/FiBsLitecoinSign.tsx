import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLitecoinSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,21v3H7.5c-1.93,0-3.5-1.57-3.5-3.5v-7.39L0,14.44v-3.17l4-1.33V0h3V8.94l9-3v3.17l-9,3v8.39c0,.28,.22,.5,.5,.5h14.5Z"/></svg>
);

FiBsLitecoinSign.displayName = 'FiBsLitecoinSign';
