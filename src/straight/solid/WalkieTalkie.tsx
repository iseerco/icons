import React from 'react';
import type { IconProps } from '../../types';

export const WalkieTalkie: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16,11h-8v-2h8v2Zm6-5v6.448c0,.905-.311,1.792-.876,2.499l-1.124,1.404v7.649H4v-7.649l-1.124-1.404c-.565-.707-.876-1.594-.876-2.499v-6.448c0-1.654,1.346-3,3-3V0h2v3h3V1h2v2h7c1.654,0,3,1.346,3,3Zm-4,1H6v6h12v-6Z"/></svg>
);

WalkieTalkie.displayName = 'WalkieTalkie';
