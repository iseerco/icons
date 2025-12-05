import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSchoolBus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 13.5a3.507 3.507 0 0 0 -3-3.465v-5.535a3.5 3.5 0 0 0 -3.5-3.5h-14a3.5 3.5 0 0 0 -3.5 3.5v15.5h3.058a2.424 2.424 0 0 0 -.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0 -.058-.5h8.116a2.424 2.424 0 0 0 -.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0 -.058-.5h3.058zm-18-7.5v4h-3v-4zm3 0h3v11h-3zm6 0h3v4h-3zm-12 7h3v4h-3zm18 4h-6v-4h5.5a.5.5 0 0 1 .5.5z"/></svg>
);

FiBsSchoolBus.displayName = 'FiBsSchoolBus';
