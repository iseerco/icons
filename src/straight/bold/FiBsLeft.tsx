import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,24.04L.98,14.35C.34,13.71,0,12.88,0,12c0-.88,.35-1.71,.97-2.33h.02S11-.01,11-.01V7h13v10H11v7.04ZM3.08,11.8c-.07,.07-.08,.15-.08,.2s.01,.14,.09,.21l4.91,4.75v-2.96h13v-4H8v-2.95L3.08,11.8Z"/></svg>
);

FiBsLeft.displayName = 'FiBsLeft';
