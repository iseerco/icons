import React from 'react';
import type { IconProps } from '../../types';

export const FiBsIntegral: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m19,4.25v1.75h-3v-1.75c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25,1.25v15.5c0,2.344-1.907,4.25-4.25,4.25s-4.25-1.906-4.25-4.25v-1.75h3v1.75c0,.689.561,1.25,1.25,1.25s1.25-.561,1.25-1.25V4.25c0-2.344,1.907-4.25,4.25-4.25s4.25,1.906,4.25,4.25Z"/>
</svg>
);

FiBsIntegral.displayName = 'FiBsIntegral';
