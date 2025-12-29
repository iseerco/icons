import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSegway: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 15v7c0 1.105-.895 2-2 2s-2-.895-2-2v-2h-16v2c0 1.105-.895 2-2 2s-2-.895-2-2v-7c0-1.105.895-2 2-2s2 .895 2 2v2h4v-2h2.5v-9l-1.333-3h-5.167v-3h16v3h-5.167l-1.333 3v9h2.5v2h4v-2c0-1.105.895-2 2-2s2 .895 2 2z"/></svg>
);

FiBsSegway.displayName = 'FiBsSegway';
