import React from 'react';
import type { IconProps } from '../../types';

export const FiBsH1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m11,4h3v16h-3v-7h-6v7h-3V4h3v6h6v-6Zm8.781,0l-3.854,3.953,2.147,2.094.926-.949v10.902h3V4h-2.219Z"/></svg>
);

FiBsH1.displayName = 'FiBsH1';
