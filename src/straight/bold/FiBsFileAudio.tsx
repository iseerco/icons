import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileAudio: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m9.114,13l3.886-2.564v9.125l-3.886-2.561h-2.114v-4h2.114Zm12.886-7.335v18.335H2V3c0-1.654,1.346-3,3-3h11.382l5.618,5.665Zm-3,15.335v-13h-5V3H5v18h14Zm-4-8v4c1.105,0,2-.895,2-2s-.895-2-2-2Z"/></svg>
);

FiBsFileAudio.displayName = 'FiBsFileAudio';
