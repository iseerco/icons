import React from 'react';
import type { IconProps } from '../../types';

export const Pharmacy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m16 24h-8v-8h-8v-8h8v-8h8v8h8v8h-8zm-6-2h4v-8h8v-4h-8v-8h-4v8h-8v4h8z"/></svg>
);

Pharmacy.displayName = 'Pharmacy';
