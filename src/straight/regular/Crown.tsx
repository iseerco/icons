import React from 'react';
import type { IconProps } from '../../types';

export const Crown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M21,21.707H3a3,3,0,0,1-3-3V2.293l6,6,6-6,6,6,6-6V18.707A3,3,0,0,1,21,21.707ZM2,7.121V18.707a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V7.121l-4,4-6-6-6,6Z"/></g></svg>
);

Crown.displayName = 'Crown';
