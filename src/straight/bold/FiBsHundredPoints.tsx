import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHundredPoints: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m2,6.559L.121,4.724l2.66-2.724h2.219v12h-3v-7.441Zm13,1.441v-4c0-2.206,1.794-4,4-4s4,1.794,4,4v4c0,2.206-1.794,4-4,4s-4-1.794-4-4Zm3,0c0,.551.448,1,1,1s1-.449,1-1v-4c0-.551-.448-1-1-1s-1,.449-1,1v4Zm-12,1v-4c0-2.206,1.794-4,4-4s4,1.794,4,4v4c0,2.206-1.794,4-4,4s-4-1.794-4-4Zm3,0c0,.551.448,1,1,1s1-.449,1-1v-4c0-.551-.448-1-1-1s-1,.449-1,1v4Zm14.493,3.979L-.007,17.065l.514,2.956,23.5-4.087-.514-2.956Zm-14.498,8.023l.51,2.956,14.5-2.5-.51-2.956-14.5,2.5Z"/></svg>
);

FiBsHundredPoints.displayName = 'FiBsHundredPoints';
