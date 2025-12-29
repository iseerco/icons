import React from 'react';
import type { IconProps } from '../../types';

export const FiBrIntersection: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m20.5,24c-.828,0-1.5-.672-1.5-1.5v-12.5c0-3.859-3.141-7-7-7s-7,3.141-7,7v12.5c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-12.5C2,4.486,6.486,0,12,0s10,4.486,10,10v12.5c0,.828-.672,1.5-1.5,1.5Z"/>
</svg>
);

FiBrIntersection.displayName = 'FiBrIntersection';
