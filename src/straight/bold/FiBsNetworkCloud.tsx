import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNetworkCloud: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 19h-8.85a3.5 3.5 0 0 0 -1.65-1.65v-3.35h2.25a5.251 5.251 0 0 0 .884-10.426 5.489 5.489 0 0 0 -10.628 1.681 4.5 4.5 0 0 0 1.494 8.745h3v3.35a3.5 3.5 0 0 0 -1.65 1.65h-8.85v3h8.85a3.481 3.481 0 0 0 6.3 0h8.85zm-18-9.5a1.5 1.5 0 0 1 1.438-1.5l2.181.112a20.492 20.492 0 0 1 -.619-2.612 2.49 2.49 0 0 1 4.964-.293l.169 1.431a12.29 12.29 0 0 1 1.655-.138 2.25 2.25 0 0 1 -.038 4.5h-8.25a1.5 1.5 0 0 1 -1.5-1.5z"/></svg>
);

FiBsNetworkCloud.displayName = 'FiBsNetworkCloud';
