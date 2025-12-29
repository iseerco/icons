import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLayerPlus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,11.303l12,7.2v3.499L0,14.802v-3.499Zm24-3.103v1.099l-12,7.2L0,9.299v-1.099L12,1l12,7.2Zm-4.916,.549l-7.084-4.25-7.084,4.25,7.084,4.25,7.084-4.25Zm1.916,6.25h-3v3h-3v3h3v3h3v-3h3v-3h-3v-3Z"/></svg>
);

FiBsLayerPlus.displayName = 'FiBsLayerPlus';
