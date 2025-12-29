import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareRoot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m9.123 22h-3.139l-3.874-9.686a.5.5 0 0 0 -.464-.314h-1.646v-3h1.646a3.485 3.485 0 0 1 3.254 2.2l2.46 6.161 3.779-12.849a3.519 3.519 0 0 1 3.361-2.512h9.5v3h-9.5a.5.5 0 0 0 -.479.359zm11.638-5 3.239-5h-3.522l-1.478 2.281-1.478-2.281h-3.522l3.239 5-3.239 5h3.522l1.478-2.281 1.478 2.281h3.522z"/></svg>
);

FiBsSquareRoot.displayName = 'FiBsSquareRoot';
