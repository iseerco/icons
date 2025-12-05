import React from 'react';
import type { IconProps } from '../../types';

export const Asterik: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m23.58 8.536-3.362-5.4-4.945 3.08v-6.216h-6.546v6.216l-4.945-3.08-3.362 5.4 5.563 3.464-5.563 3.464 3.362 5.4 4.945-3.08v6.216h6.546v-6.216l4.945 3.08 3.362-5.4-5.563-3.464z"/></svg>
);

Asterik.displayName = 'Asterik';
