import React from 'react';
import type { IconProps } from '../../types';

export const CircleI: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,8h-3v8h3v2h-8v-2h3v-8h-3v-2h8v2Z"/></svg>
);

CircleI.displayName = 'CircleI';
